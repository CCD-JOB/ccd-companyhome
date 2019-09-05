import * as d3 from 'd3'

export default function init (el, resp) {
  const width = 800
  const height = 600
  const initScale = 0.3 // 初始化缩放倍数
  let draging = false
  const nodeConf = {
    fillColor: {
      基金: 'rgb(255, 76, 10)',
      信托: '#449d44',
      管理人: 'rgb(35, 148, 206)',
      基金经理: 'rgb(255,215,0)',
      托管人: 'rgb(255,162,208)',
      法人: 'rgb(0,206,209)'
    },
    strokeColor: {
      基金: 'rgb(244,56,0)',
      管理人: 'rgb(35, 148, 206)',
      基金经理: 'rgb(255,215,0)',
      托管人: 'rgb(255,162,208)',
      法人: 'rgb(0,206,209)'
    },
    strokeWidth: {
      基金: 3,
      管理人: 3,
      基金经理: 3,
      托管人: 3,
      法人: 3
    },
    textFillColor: {
      基金: '#fff',
      管理人: '#fff',
      基金经理: '#fff',
      托管人: '#fff',
      法人: '#fff'
    },
    radius: {
      基金: 120,
      管理人: 120,
      基金经理: 120,
      托管人: 120,
      法人: 120
    }
  }

  const lineConf = {
    strokeColor: {
      发行: 'rgb(28, 194, 216)',
      法人: 'rgb(204, 225, 152)',
      托管: 'rgb(242, 90, 41)',
      管理: 'rgb(201,11,10)'
    }
  }

  const nodeTextFontSize = 19
  const lineTextFontSize = 18

  let nodesMap = {}
  let linkMap = {}

  // 力导向图
  const force = d3.layout
    .force()
    .size([width, height]) // 画布的大小
    .linkDistance(400) // 连线长度
    .charge(-39000) // 排斥/吸引，值越小越排斥

  // 全图缩放器
  const zoom = d3.behavior
    .zoom()
    .scaleExtent([0.25, 5])
    .on('zoom', zoomFn)

  // 节点拖拽器（使用 d3.behavior.drag 节点拖动失效）
  const drag = force
    .drag()
    .origin(d => d)
    .on('dragstart', dragstartFn)
    .on('drag', dragFn)
    .on('dragend', dragendFn)

  // SVG
  const svg = d3
    .select(el)
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%')
    .append('g')
    .call(zoom)
    .on('dblclick.zoom', null)

  // 缩放层（位置必须在 container 之前）
  const zoomOverlay = svg
    .append('rect')
    .attr('width', '100%')
    .attr('height', '100%')
    .style('fill', 'none')
    .style('pointer-events', 'all')
  const container = svg
    .append('g')
    // .attr('transform', 'scale(' + initScale + ')')
    .attr('transform', 'translate(100,200)scale(' + initScale + ')')
    .attr('class', 'container')

  // 请求数据，绘制图表
  // 初始化
  setTimeout(function () {
    initialize(resp)
  }, 10)

  function genLinks (relations) {
    const indexHash = {}

    return relations.map(function ({ id, startNode, endNode, type }, i) {
      const linkKey = startNode + '-' + endNode
      const count = linkMap[linkKey]
      if (indexHash[linkKey]) {
        indexHash[linkKey] -= 1
      } else {
        indexHash[linkKey] = count - 1
      }

      return {
        id,
        source: nodesMap[startNode],
        target: nodesMap[endNode],
        type,

        type: linkMap[linkKey + '-type'],
        count: linkMap[linkKey],
        index: indexHash[linkKey]
      }
    })
  }

  function genLinkMap (relations) {
    const hash = {}
    relations.map(function ({ startNode, endNode, type }) {
      const key = startNode + '-' + endNode
      if (hash[key]) {
        hash[key] += 1
        hash[key + '-type'] += '、' + type
      } else {
        hash[key] = 1
        hash[key + '-type'] = type
      }
    })
    return hash
  }

  function genNodesMap (nodes) {
    const hash = {}
    nodes.map(function ({ id, properties, labels }) {
      hash[id] = {
        id,
        properties,
        labels
      }
    })
    return hash
  }

  // 生成关系连线路径
  function genLinkPath (link) {
    const sr = nodeConf.radius.Person
    const tr = nodeConf.radius.Movie

    const count = link.count
    const index = link.index

    let sx = link.source.x
    let tx = link.target.x
    let sy = link.source.y
    let ty = link.target.y

    return 'M' + sx + ',' + sy + ' L' + tx + ',' + ty
  }

  function getLineAngle (sx, sy, tx, ty) {
    // 两点 x, y 坐标偏移值
    const x = tx - sx
    const y = ty - sy
    // 斜边长度
    const hypotenuse = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) | 1
    // 求出弧度
    const cos = x / hypotenuse
    const radian = Math.acos(cos)
    // 用弧度算出角度
    let angle = 180 / (Math.PI / radian)
    if (y < 0) {
      angle = -angle
    } else if (y == 0 && x < 0) {
      angle = 180
    }
    return angle
  }

  function zoomFn () {
    const { translate, scale } = d3.event
    /* console.log('x轴坐标',translate[0]);
          console.log('scale', scale); */
    container.attr(
      'transform',
      'translate(' + translate + ')scale(' + scale * initScale + ')'
    )
    /* if (Number(translate[0]) < 800 && Number(translate[0]) > -100) {
              container.attr('transform', 'translate(' + translate + ')scale(' + scale * initScale + ')');
          }else{
              console.log('走了else')
              //container.attr('transform', 'translate(0)scale(0.25)');
              var draged = d3.behavior.drag();
              draged.on("dragstart", function () {
                  d3.event.sourceEvent.stopPropagation();
              }).on("dragend", function () {
                  d3.event.sourceEvent.stopPropagation();
              });
          } */
  }

  function dragstartFn (d) {
    // console.log('dragstartFn', d);
    draging = true
    d3.event.sourceEvent.stopPropagation()
    force.start()
  }

  function dragFn (d) {
    // console.log('dragFn',d3.event.x)
    draging = true
    d3.select(this)
      .attr('cx', (d.x = d3.event.x))
      .attr('cy', (d.y = d3.event.y))
  }

  function dragendFn (d) {
    // console.log('dragendFn', d);
    draging = false
    force.stop()
  }

  function isLinkLine (node, link) {
    return link.source.id == node.id || link.target.id == node.id
  }

  function isLinkNode (currNode, node) {
    if (currNode.id === node.id) {
      return true
    }
    return (
      linkMap[currNode.id + '-' + node.id] ||
      linkMap[node.id + '-' + currNode.id]
    )
  }

  function textBreaking (d3text, text) {
    const len = text.length
    if (len <= 13) {
      d3text
        .append('tspan')
        .attr('x', 0)
        .attr('y', 8)
        .text(text)
    } else {
      const topText = text.substring(0, 8)
      const midText = text.substring(8, 16)
      let botText = text.substring(16, len)
      let topY = -30
      let midY = 18
      let botY = 4
      if (len <= 30) {
        topY += 10
        midY += 1
        botY += 45
      } else {
        topY += 10
        midY += 1
        botY += 45
        botText = text.substring(18, 28) + '...'
      }

      d3text.text('')
      d3text
        .append('tspan')
        .attr('x', 0)
        .attr('y', topY)
        .text(function () {
          return topText
        })
      d3text
        .append('tspan')
        .attr('x', 0)
        .attr('y', midY)
        .text(function () {
          return midText
        })
      d3text
        .append('tspan')
        .attr('x', 0)
        .attr('y', botY)
        .text(function () {
          return botText
        })
    }
  }

  function getLineTextDx (d) {
    const sr = nodeConf.radius[d.source.labels]
    const sx = d.source.x
    const sy = d.source.y
    const tx = d.target.x
    const ty = d.target.y

    const distance = Math.sqrt(Math.pow(tx - sx, 2) + Math.pow(ty - sy, 2))

    const textLength = d.type.length
    // const textLength = d.labels.length;
    const deviation = 8 // 调整误差
    const dx = (distance - sr - textLength * lineTextFontSize) / 2 + deviation

    return dx
  }

  function getLineTextAngle (d, bbox) {
    if (d.target.x < d.source.x) {
      const { x, y, width, height } = bbox
      const rx = x + width / 2
      const ry = y + height / 2
      return 'rotate(180 ' + rx + ' ' + ry + ')'
    } else {
      return 'rotate(0)'
    }
  }

  function toggleNode (nodeCircle, currNode, isHover) {
    console.log('toggleNode', nodeCircle, currNode, isHover)
    if (isHover) {
      // 提升节点层级
      nodeCircle.sort((a, b) => (a.id === currNode.id ? 1 : -1))
      // this.parentNode.appendChild(this);
      nodeCircle
        .style('opacity', 0.3)
        .filter(node => isLinkNode(currNode, node))
        .style('opacity', 1)
    } else {
      nodeCircle.style('opacity', 1)
    }
  }

  function toggleLine (linkLine, currNode, isHover) {
    if (isHover) {
      // 加重连线样式
      linkLine
        .style('opacity', 0.1)
        .filter(link => isLinkLine(currNode, link))
        .style('opacity', 1)
        .classed('link-active', true)
    } else {
      // 连线恢复样式
      linkLine.style('opacity', 1).classed('link-active', false)
    }
  }

  function toggleLineText (lineText, currNode, isHover) {
    if (isHover) {
      // 只显示相连连线文字
      lineText.style('fill-opacity', link =>
        isLinkLine(currNode, link) ? 1.0 : 0.0
      )
    } else {
      // 显示所有连线文字
      lineText.style('fill-opacity', '1.0')
    }
  }

  function toggleMarker (marker, currNode, isHover) {
    if (isHover) {
      // 放大箭头
      marker
        .filter(link => isLinkLine(currNode, link))
        .style('transform', 'scale(1.5)')
    } else {
      // 恢复箭头
      marker.attr('refX', nodeConf.radius.Movie).style('transform', 'scale(1)')
    }
  }

  function round (num, pow = 2) {
    const multiple = Math.pow(10, pow)
    return Math.round(num * multiple) / multiple
  }

  // 初始化
  function initialize (resp) {
    let { nodes, relations } = resp

    const nodesLength = nodes.length

    // 生成 nodes map
    nodesMap = genNodesMap(nodes)

    // 构建 nodes（不能直接使用 api 中的 nodes）
    nodes = d3.values(nodesMap)

    // 起点和终点相同的关系映射
    linkMap = genLinkMap(relations)

    // 构建 links（source 属性必须从 0 开始）
    const links = genLinks(relations)

    // 绑定力导向图数据
    force
      .nodes(nodes) // 设定节点数组
      .links(links) // 设定连线数组

    // 开启力导向布局
    force.start()

    // 手动快速布局
    for (let i = 0, n = 1000; i < n; ++i) {
      force.tick()
    }

    // 停止力布局
    force.stop()

    // 固定所有节点
    nodes.forEach(node => {
      node.fixed = true
    })

    // 箭头
    const marker = container
      .append('svg:defs')
      .selectAll('marker')
      .data(force.links())
      .enter()
      .append('svg:marker')
      .attr('id', link => 'marker-' + link.id)
      .attr('markerUnits', 'userSpaceOnUse')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', nodeConf.radius.Movie)
      .attr('refY', 0)
      .attr('markerWidth', 12)
      .attr('markerHeight', 12)
      .attr('orient', 'auto')
      .attr('stroke-width', 2)
      .append('svg:path')
      .attr('d', 'M2,0 L0,-3 L9,0 L0,3 M2,0 L0,-3')
      .attr('fill', link => lineConf.strokeColor[link.type])

    // 节点连线
    const linkLine = container
      .selectAll('.link')
      .data(force.links())
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr({
        'marker-end': link => 'url(#' + 'marker-' + link.id + ')', // 标记箭头
        d: link => genLinkPath(link),
        id: link => 'link-' + link.id
      })
      .style('stroke', link => lineConf.strokeColor[link.type])

    // 连线的文字
    const lineText = container
      .append('g')
      .selectAll('.linetext')
      .data(force.links())
      .enter()
      .append('text')
      .style('font-size', lineTextFontSize)
      .attr({
        class: 'linetext',
        id: link => 'linktext' + link.id,
        dx: link => getLineTextDx(link),
        dy: 20
      })

    lineText
      .append('textPath')
      .attr('xlink:href', link => '#link-' + link.id)
      // .text(link => link.label);
      .text(link => link.type)

    // 节点（圆）
    const nodeCircle = container
      .append('g')
      .selectAll('.node') // 找到所有的circle
      .data(force.nodes())
      .enter()
      .append('g')
      .style('cursor', 'pointer')
      .attr('class', 'node')
      .attr('cx', node => node.x)
      .attr('cy', node => node.y)
      .call(drag) // 节点可拖动

    nodeCircle
      .append('circle')
      // .style('fill-opacity', .3)
      .style('fill', node => nodeConf.fillColor[node.labels])
      .style('stroke', node => nodeConf.strokeColor[node.labels])
      .style('stroke-width', node => nodeConf.strokeWidth[node.labels])
      .attr('class', 'node-circle')
      .attr('id', node => 'node-circle-' + node.id)
      .attr('r', node => nodeConf.radius[node.labels])

    /* .on('click', function(currNode){
              console.log('被点击了')
              marker.style("stroke-width", function(line){
                  console.log('line',line)
                  if(line.source.name==currNode.name || line.target.name==currNode.name){//当与连接点连接时变粗
                      return 4;
                  }else{
                      return 2;
                  }
              })

          }) */

    // 鼠标交互
    nodeCircle.on('click', function (currNode) {
      if (draging) {
        return
      }
      toggleNode(nodeCircle, currNode, true)
      toggleLine(linkLine, currNode, true)
      toggleMarker(marker, currNode, true)
      toggleLineText(lineText, currNode, true)
    })
    /* .on('touchend', function (currNode) {
              //.on('toucheleave', function (currNode) {
              if (draging) {
                  return;
              }
              //alert(2222)
              toggleNode(nodeCircle, currNode, false);
              toggleLine(linkLine, currNode, false);
              toggleMarker(marker, currNode, false);
              toggleLineText(lineText, currNode, false);
          }); */

    /* nodeCircle.on("click",function(currNode){
              var nodeId=currNode.id;
              console.log(nodeId);
              if(currNode.labels=="基金"){
                 location.href="https://testfund.aifound.cn/lofDetail.html?id="+nodeId;
              }else if(currNode.labels=="法人"){
               location.href="https://testfund.aifound.cn/legalPerson.html?id="+nodeId;
              }else if(currNode.labels=="管理人"){
               location.href="https://testfund.aifound.cn/businessDetail.html?id="+nodeId;
              }else if(currNode.labels=="基金经理"){
               location.href="../managerDetail.html?id="+nodeId;
              }
               return
           }) */

    // 节点文字
    const nodeText = nodeCircle
      .append('text')
      .attr('class', 'nodetext')
      .attr('id', node => 'node-text-' + node.id)
      .style('font-size', nodeTextFontSize)
      .style('font-weight', 400)
      .style('fill', ({ labels }) => nodeConf.textFillColor[labels])
      .attr('text-anchor', 'middle')
      .attr('dy', '0em')
      .attr('x', function ({ properties }) {
        return textBreaking(d3.select(this), properties)
      })

    // 更新力导向图
    function tick () {
      // 节点位置
      nodeCircle.attr(
        'transform',
        node => 'translate(' + node.x + ',' + node.y + ')'
      )
      // 连线路径
      linkLine.attr('d', link => genLinkPath(link))
      // 连线文字位置
      lineText.attr('dx', link => getLineTextDx(link))
      // 连线文字角度
      lineText.attr('transform', function (link) {
        return getLineTextAngle(link, this.getBBox())
      })
    }

    // 更新力导向图
    // 注意1：必须调用一次 tick （否则，节点会堆积在左上角）
    // 注意2：调用位置必须在 nodeCircle, nodeText, linkLine, lineText 后
    setTimeout(function () {
      tick()
    }, 10)

    // 监听力学图运动事件，更新坐标
    force.on('tick', tick)
  }
}
