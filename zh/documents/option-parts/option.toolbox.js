window.__EC_DOC_option_toolbox = {
  "id": {
    "desc": "<p>组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。</p>\n"
  },
  "show": {
    "desc": "\n\n<p>是否显示工具栏组件。</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "orient": {
    "desc": "\n\n<p>工具栏 icon 的布局朝向。</p>\n<p>可选：</p>\n<ul>\n<li>&#39;horizontal&#39;</li>\n<li>&#39;vertical&#39;</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "vertical,horizontal"
    }
  },
  "itemSize": {
    "desc": "\n\n<p>工具栏 icon 的大小。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "15"
    }
  },
  "itemGap": {
    "desc": "\n\n<p>工具栏 icon 每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "10"
    }
  },
  "showTitle": {
    "desc": "\n\n<p>是否在鼠标 hover 的时候显示每个工具 icon 的标题。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "feature": {
    "desc": "<p>各工具配置项。</p>\n<p>除了各个内置的工具按钮外，还可以自定义工具按钮。</p>\n<p>注意，自定义的工具名字，只能以 <code class=\"codespan\">my</code> 开头，例如下例中的 <code class=\"codespan\">myTool1</code>，<code class=\"codespan\">myTool2</code>：</p>\n<pre><code class=\"lang-javascript\">{\n    toolbox: {\n        feature: {\n            myTool1: {\n                show: true,\n                title: &#39;自定义扩展方法1&#39;,\n                icon: &#39;path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891&#39;,\n                onclick: function (){\n                    alert(&#39;myToolHandler1&#39;)\n                }\n            },\n            myTool2: {\n                show: true,\n                title: &#39;自定义扩展方法&#39;,\n                icon: &#39;image://https://echarts.apache.org/zh/images/favicon.png&#39;,\n                onclick: function (){\n                    alert(&#39;myToolHandler2&#39;)\n                }\n            }\n        }\n    }\n}\n</code></pre>\n"
  },
  "feature.saveAsImage": {
    "desc": "<p>保存为图片。</p>\n"
  },
  "feature.saveAsImage.type": {
    "desc": "\n\n<p>保存的图片格式。</p>\n<ul>\n<li>如果 <code class=\"codespan\">renderer</code> 的类型在 <a href=\"api.html#echarts.init\" target=\"_blank\">初始化图表</a> 时被设为 <code class=\"codespan\">&#39;canvas&#39;</code>（默认），则支持 <code class=\"codespan\">&#39;png&#39;</code>（默认）和 <code class=\"codespan\">&#39;jpg&#39;</code>；</li>\n<li>如果 <code class=\"codespan\">renderer</code> 的类型在 <a href=\"api.html#echarts.init\" target=\"_blank\">初始化图表</a> 时被设为 <code class=\"codespan\">&#39;svg&#39;</code>，则 <code class=\"codespan\">type</code> 只支持 <code class=\"codespan\">&#39;svg&#39;</code>（<code class=\"codespan\">&#39;svg&#39;</code> 格式的图片从 <code class=\"codespan\">v4.8.0</code> 开始支持）。</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "png,jpg"
    }
  },
  "feature.saveAsImage.name": {
    "desc": "\n\n<p>保存的文件名称，默认使用 <a href=\"#title.text\">title.text</a> 作为名称。</p>\n",
    "uiControl": {
      "type": "text"
    }
  },
  "feature.saveAsImage.backgroundColor": {
    "desc": "\n\n<p>保存的图片背景色，默认使用 <a href=\"#backgroundColor\">backgroundColor</a>，如果<code class=\"codespan\">backgroundColor</code>不存在的话会取白色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.saveAsImage.connectedBackgroundColor": {
    "desc": "\n\n<p>如果图表使用了 <a href=\"api.html#echarts.connect\" target=\"_blank\">echarts.connect</a> 对多个图表进行联动，则在导出图片时会导出这些联动的图表。该配置项决定了图表与图表之间间隙处的填充色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.saveAsImage.excludeComponents": {
    "desc": "<p>保存为图片时忽略的组件列表，默认忽略工具栏。</p>\n"
  },
  "feature.saveAsImage.show": {
    "desc": "<p>是否显示该工具。</p>\n"
  },
  "feature.saveAsImage.icon": {
    "desc": "<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
  },
  "feature.saveAsImage.iconStyle": {
    "desc": "<p>保存为图片 icon 样式设置。由于 icon 的文本信息只在 icon hover 时候才显示，所以文字相关的配置项请在 <code class=\"codespan\">emphasis</code> 下设置。</p>\n"
  },
  "feature.saveAsImage.iconStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.saveAsImage.iconStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.saveAsImage.iconStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "feature.saveAsImage.iconStyle.borderType": {
    "desc": "\n\n\n<p>描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">borderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "feature.saveAsImage.iconStyle.borderDashOffset": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">borderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "feature.saveAsImage.iconStyle.borderCap": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于指定线段末端的绘制方式，可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: 线段末端以方形结束。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 线段末端以圆形结束。</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;butt&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "feature.saveAsImage.iconStyle.borderJoin": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。</p>\n<p>可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 \n<code class=\"codespan\">borderMiterLimit</code>\n属性看到效果。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;bevel&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "feature.saveAsImage.iconStyle.borderMiterLimit": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置斜接面限制比例。只有当 \n<code class=\"codespan\">borderJoin</code>\n 为 <code class=\"codespan\">miter</code> 时，\n<code class=\"codespan\">borderMiterLimit</code>\n 才有效。</p>\n<p>默认值为 <code class=\"codespan\">10</code>。负数、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> 和 <code class=\"codespan\">NaN</code> 均会被忽略。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "feature.saveAsImage.iconStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "feature.saveAsImage.iconStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "feature.saveAsImage.iconStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "feature.saveAsImage.iconStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "feature.saveAsImage.iconStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "feature.saveAsImage.emphasis.iconStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.saveAsImage.emphasis.iconStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.saveAsImage.emphasis.iconStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "feature.saveAsImage.emphasis.iconStyle.borderType": {
    "desc": "\n\n\n<p>描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">borderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "feature.saveAsImage.emphasis.iconStyle.borderDashOffset": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">borderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "feature.saveAsImage.emphasis.iconStyle.borderCap": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于指定线段末端的绘制方式，可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: 线段末端以方形结束。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 线段末端以圆形结束。</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;butt&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "feature.saveAsImage.emphasis.iconStyle.borderJoin": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。</p>\n<p>可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 \n<code class=\"codespan\">borderMiterLimit</code>\n属性看到效果。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;bevel&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "feature.saveAsImage.emphasis.iconStyle.borderMiterLimit": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置斜接面限制比例。只有当 \n<code class=\"codespan\">borderJoin</code>\n 为 <code class=\"codespan\">miter</code> 时，\n<code class=\"codespan\">borderMiterLimit</code>\n 才有效。</p>\n<p>默认值为 <code class=\"codespan\">10</code>。负数、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> 和 <code class=\"codespan\">NaN</code> 均会被忽略。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "feature.saveAsImage.emphasis.iconStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "feature.saveAsImage.emphasis.iconStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "feature.saveAsImage.emphasis.iconStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "feature.saveAsImage.emphasis.iconStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "feature.saveAsImage.emphasis.iconStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "feature.saveAsImage.emphasis.iconStyle.textPosition": {
    "desc": "<p>文本位置，<code class=\"codespan\">&#39;left&#39;</code> / <code class=\"codespan\">&#39;right&#39;</code> / <code class=\"codespan\">&#39;top&#39;</code> / <code class=\"codespan\">&#39;bottom&#39;</code>。</p>\n"
  },
  "feature.saveAsImage.emphasis.iconStyle.textFill": {
    "desc": "\n\n<p>文本颜色，如果未设定，则依次取图标 emphasis 时候的填充色、描边色，如果都不存在，则为 <code class=\"codespan\">&#39;#000&#39;</code>。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.saveAsImage.emphasis.iconStyle.textAlign": {
    "desc": "\n\n<p>文本对齐方式，<code class=\"codespan\">&#39;left&#39;</code> / <code class=\"codespan\">&#39;center&#39;</code> / <code class=\"codespan\">&#39;right&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "feature.saveAsImage.emphasis.iconStyle.textBackgroundColor": {
    "desc": "\n\n<p>文本区域填充色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.saveAsImage.emphasis.iconStyle.textBorderRadius": {
    "desc": "\n\n<p>文本区域圆角大小。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT,RB,LB"
    }
  },
  "feature.saveAsImage.emphasis.iconStyle.textPadding": {
    "desc": "\n\n<p>文本区域内边距。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "feature.saveAsImage.pixelRatio": {
    "desc": "\n\n<p>保存图片的分辨率比例，默认跟容器相同大小，如果需要保存更高分辨率的，可以设置为大于 1 的值，例如 2。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0.5",
      "max": "5",
      "step": "0.5"
    }
  },
  "feature.restore": {
    "desc": "<p>配置项还原。</p>\n"
  },
  "feature.restore.show": {
    "desc": "<p>是否显示该工具。</p>\n"
  },
  "feature.restore.icon": {
    "desc": "<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
  },
  "feature.restore.iconStyle": {
    "desc": "<p>还原 icon 样式设置。由于 icon 的文本信息只在 icon hover 时候才显示，所以文字相关的配置项请在 <code class=\"codespan\">emphasis</code> 下设置。</p>\n"
  },
  "feature.restore.iconStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.restore.iconStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.restore.iconStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "feature.restore.iconStyle.borderType": {
    "desc": "\n\n\n<p>描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">borderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "feature.restore.iconStyle.borderDashOffset": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">borderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "feature.restore.iconStyle.borderCap": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于指定线段末端的绘制方式，可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: 线段末端以方形结束。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 线段末端以圆形结束。</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;butt&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "feature.restore.iconStyle.borderJoin": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。</p>\n<p>可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 \n<code class=\"codespan\">borderMiterLimit</code>\n属性看到效果。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;bevel&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "feature.restore.iconStyle.borderMiterLimit": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置斜接面限制比例。只有当 \n<code class=\"codespan\">borderJoin</code>\n 为 <code class=\"codespan\">miter</code> 时，\n<code class=\"codespan\">borderMiterLimit</code>\n 才有效。</p>\n<p>默认值为 <code class=\"codespan\">10</code>。负数、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> 和 <code class=\"codespan\">NaN</code> 均会被忽略。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "feature.restore.iconStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "feature.restore.iconStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "feature.restore.iconStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "feature.restore.iconStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "feature.restore.iconStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "feature.restore.emphasis.iconStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.restore.emphasis.iconStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.restore.emphasis.iconStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "feature.restore.emphasis.iconStyle.borderType": {
    "desc": "\n\n\n<p>描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">borderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "feature.restore.emphasis.iconStyle.borderDashOffset": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">borderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "feature.restore.emphasis.iconStyle.borderCap": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于指定线段末端的绘制方式，可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: 线段末端以方形结束。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 线段末端以圆形结束。</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;butt&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "feature.restore.emphasis.iconStyle.borderJoin": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。</p>\n<p>可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 \n<code class=\"codespan\">borderMiterLimit</code>\n属性看到效果。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;bevel&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "feature.restore.emphasis.iconStyle.borderMiterLimit": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置斜接面限制比例。只有当 \n<code class=\"codespan\">borderJoin</code>\n 为 <code class=\"codespan\">miter</code> 时，\n<code class=\"codespan\">borderMiterLimit</code>\n 才有效。</p>\n<p>默认值为 <code class=\"codespan\">10</code>。负数、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> 和 <code class=\"codespan\">NaN</code> 均会被忽略。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "feature.restore.emphasis.iconStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "feature.restore.emphasis.iconStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "feature.restore.emphasis.iconStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "feature.restore.emphasis.iconStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "feature.restore.emphasis.iconStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "feature.restore.emphasis.iconStyle.textPosition": {
    "desc": "<p>文本位置，<code class=\"codespan\">&#39;left&#39;</code> / <code class=\"codespan\">&#39;right&#39;</code> / <code class=\"codespan\">&#39;top&#39;</code> / <code class=\"codespan\">&#39;bottom&#39;</code>。</p>\n"
  },
  "feature.restore.emphasis.iconStyle.textFill": {
    "desc": "\n\n<p>文本颜色，如果未设定，则依次取图标 emphasis 时候的填充色、描边色，如果都不存在，则为 <code class=\"codespan\">&#39;#000&#39;</code>。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.restore.emphasis.iconStyle.textAlign": {
    "desc": "\n\n<p>文本对齐方式，<code class=\"codespan\">&#39;left&#39;</code> / <code class=\"codespan\">&#39;center&#39;</code> / <code class=\"codespan\">&#39;right&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "feature.restore.emphasis.iconStyle.textBackgroundColor": {
    "desc": "\n\n<p>文本区域填充色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.restore.emphasis.iconStyle.textBorderRadius": {
    "desc": "\n\n<p>文本区域圆角大小。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT,RB,LB"
    }
  },
  "feature.restore.emphasis.iconStyle.textPadding": {
    "desc": "\n\n<p>文本区域内边距。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "feature.dataView": {
    "desc": "<p>数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。</p>\n"
  },
  "feature.dataView.show": {
    "desc": "<p>是否显示该工具。</p>\n"
  },
  "feature.dataView.icon": {
    "desc": "<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
  },
  "feature.dataView.iconStyle": {
    "desc": "<p>数据视图 icon 样式设置。由于 icon 的文本信息只在 icon hover 时候才显示，所以文字相关的配置项请在 <code class=\"codespan\">emphasis</code> 下设置。</p>\n"
  },
  "feature.dataView.iconStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.dataView.iconStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.dataView.iconStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "feature.dataView.iconStyle.borderType": {
    "desc": "\n\n\n<p>描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">borderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "feature.dataView.iconStyle.borderDashOffset": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">borderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "feature.dataView.iconStyle.borderCap": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于指定线段末端的绘制方式，可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: 线段末端以方形结束。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 线段末端以圆形结束。</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;butt&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "feature.dataView.iconStyle.borderJoin": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。</p>\n<p>可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 \n<code class=\"codespan\">borderMiterLimit</code>\n属性看到效果。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;bevel&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "feature.dataView.iconStyle.borderMiterLimit": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置斜接面限制比例。只有当 \n<code class=\"codespan\">borderJoin</code>\n 为 <code class=\"codespan\">miter</code> 时，\n<code class=\"codespan\">borderMiterLimit</code>\n 才有效。</p>\n<p>默认值为 <code class=\"codespan\">10</code>。负数、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> 和 <code class=\"codespan\">NaN</code> 均会被忽略。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "feature.dataView.iconStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "feature.dataView.iconStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "feature.dataView.iconStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "feature.dataView.iconStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "feature.dataView.iconStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "feature.dataView.emphasis.iconStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.dataView.emphasis.iconStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.dataView.emphasis.iconStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "feature.dataView.emphasis.iconStyle.borderType": {
    "desc": "\n\n\n<p>描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">borderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "feature.dataView.emphasis.iconStyle.borderDashOffset": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">borderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "feature.dataView.emphasis.iconStyle.borderCap": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于指定线段末端的绘制方式，可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: 线段末端以方形结束。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 线段末端以圆形结束。</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;butt&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "feature.dataView.emphasis.iconStyle.borderJoin": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。</p>\n<p>可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 \n<code class=\"codespan\">borderMiterLimit</code>\n属性看到效果。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;bevel&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "feature.dataView.emphasis.iconStyle.borderMiterLimit": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置斜接面限制比例。只有当 \n<code class=\"codespan\">borderJoin</code>\n 为 <code class=\"codespan\">miter</code> 时，\n<code class=\"codespan\">borderMiterLimit</code>\n 才有效。</p>\n<p>默认值为 <code class=\"codespan\">10</code>。负数、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> 和 <code class=\"codespan\">NaN</code> 均会被忽略。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "feature.dataView.emphasis.iconStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "feature.dataView.emphasis.iconStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "feature.dataView.emphasis.iconStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "feature.dataView.emphasis.iconStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "feature.dataView.emphasis.iconStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "feature.dataView.emphasis.iconStyle.textPosition": {
    "desc": "<p>文本位置，<code class=\"codespan\">&#39;left&#39;</code> / <code class=\"codespan\">&#39;right&#39;</code> / <code class=\"codespan\">&#39;top&#39;</code> / <code class=\"codespan\">&#39;bottom&#39;</code>。</p>\n"
  },
  "feature.dataView.emphasis.iconStyle.textFill": {
    "desc": "\n\n<p>文本颜色，如果未设定，则依次取图标 emphasis 时候的填充色、描边色，如果都不存在，则为 <code class=\"codespan\">&#39;#000&#39;</code>。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.dataView.emphasis.iconStyle.textAlign": {
    "desc": "\n\n<p>文本对齐方式，<code class=\"codespan\">&#39;left&#39;</code> / <code class=\"codespan\">&#39;center&#39;</code> / <code class=\"codespan\">&#39;right&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "feature.dataView.emphasis.iconStyle.textBackgroundColor": {
    "desc": "\n\n<p>文本区域填充色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.dataView.emphasis.iconStyle.textBorderRadius": {
    "desc": "\n\n<p>文本区域圆角大小。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT,RB,LB"
    }
  },
  "feature.dataView.emphasis.iconStyle.textPadding": {
    "desc": "\n\n<p>文本区域内边距。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "feature.dataView.readOnly": {
    "desc": "\n\n<p>是否不可编辑（只读）。</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "feature.dataView.optionToContent": {
    "desc": "<pre><code class=\"lang-ts\">(option:Object) =&gt; HTMLDomElement|string\n</code></pre>\n<p>自定义 dataView 展现函数，用以取代默认的 textarea 使用更丰富的数据编辑。可以返回 dom 对象或者 html 字符串。</p>\n<p>如下示例使用表格展现数据值：</p>\n<pre><code class=\"lang-ts\">optionToContent: function(opt) {\n    var axisData = opt.xAxis[0].data;\n    var series = opt.series;\n    var table = &#39;&lt;table style=&quot;width:100%;text-align:center&quot;&gt;&lt;tbody&gt;&lt;tr&gt;&#39;\n                 + &#39;&lt;td&gt;时间&lt;/td&gt;&#39;\n                 + &#39;&lt;td&gt;&#39; + series[0].name + &#39;&lt;/td&gt;&#39;\n                 + &#39;&lt;td&gt;&#39; + series[1].name + &#39;&lt;/td&gt;&#39;\n                 + &#39;&lt;/tr&gt;&#39;;\n    for (var i = 0, l = axisData.length; i &lt; l; i++) {\n        table += &#39;&lt;tr&gt;&#39;\n                 + &#39;&lt;td&gt;&#39; + axisData[i] + &#39;&lt;/td&gt;&#39;\n                 + &#39;&lt;td&gt;&#39; + series[0].data[i] + &#39;&lt;/td&gt;&#39;\n                 + &#39;&lt;td&gt;&#39; + series[1].data[i] + &#39;&lt;/td&gt;&#39;\n                 + &#39;&lt;/tr&gt;&#39;;\n    }\n    table += &#39;&lt;/tbody&gt;&lt;/table&gt;&#39;;\n    return table;\n}\n</code></pre>\n"
  },
  "feature.dataView.contentToOption": {
    "desc": "<pre><code class=\"lang-ts\">(container:HTMLDomElement, option:Object) =&gt; Object\n</code></pre>\n<p>在使用 optionToContent 的情况下，如果支持数据编辑后的刷新，需要自行通过该函数实现组装 option 的逻辑。</p>\n"
  },
  "feature.dataView.lang": {
    "desc": "<p>数据视图上有三个话术，默认是<code class=\"codespan\">[&#39;数据视图&#39;, &#39;关闭&#39;, &#39;刷新&#39;]</code>。</p>\n"
  },
  "feature.dataView.backgroundColor": {
    "desc": "\n\n<p>数据视图浮层背景色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "feature.dataView.textareaColor": {
    "desc": "\n\n<p>数据视图浮层文本输入区背景色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "feature.dataView.textareaBorderColor": {
    "desc": "\n\n<p>数据视图浮层文本输入区边框颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#333"
    }
  },
  "feature.dataView.textColor": {
    "desc": "\n\n<p>文本颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "feature.dataView.buttonColor": {
    "desc": "\n\n<p>按钮颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#c23531"
    }
  },
  "feature.dataView.buttonTextColor": {
    "desc": "\n\n<p>按钮文本颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "feature.dataZoom": {
    "desc": "<p>数据区域缩放。目前只支持直角坐标系的缩放。</p>\n"
  },
  "feature.dataZoom.show": {
    "desc": "<p>是否显示该工具。</p>\n"
  },
  "feature.dataZoom.title": {
    "desc": "<p>缩放和还原的标题文本。</p>\n"
  },
  "feature.dataZoom.icon": {
    "desc": "<p>缩放和还原的 icon path。</p>\n"
  },
  "feature.dataZoom.icon.zoom": {
    "desc": "<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
  },
  "feature.dataZoom.icon.back": {
    "desc": "<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
  },
  "feature.dataZoom.iconStyle": {
    "desc": "<p>数据区域缩放 icon 样式设置。由于 icon 的文本信息只在 icon hover 时候才显示，所以文字相关的配置项请在 <code class=\"codespan\">emphasis</code> 下设置。</p>\n"
  },
  "feature.dataZoom.iconStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.dataZoom.iconStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.dataZoom.iconStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "feature.dataZoom.iconStyle.borderType": {
    "desc": "\n\n\n<p>描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">borderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "feature.dataZoom.iconStyle.borderDashOffset": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">borderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "feature.dataZoom.iconStyle.borderCap": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于指定线段末端的绘制方式，可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: 线段末端以方形结束。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 线段末端以圆形结束。</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;butt&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "feature.dataZoom.iconStyle.borderJoin": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。</p>\n<p>可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 \n<code class=\"codespan\">borderMiterLimit</code>\n属性看到效果。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;bevel&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "feature.dataZoom.iconStyle.borderMiterLimit": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置斜接面限制比例。只有当 \n<code class=\"codespan\">borderJoin</code>\n 为 <code class=\"codespan\">miter</code> 时，\n<code class=\"codespan\">borderMiterLimit</code>\n 才有效。</p>\n<p>默认值为 <code class=\"codespan\">10</code>。负数、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> 和 <code class=\"codespan\">NaN</code> 均会被忽略。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "feature.dataZoom.iconStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "feature.dataZoom.iconStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "feature.dataZoom.iconStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "feature.dataZoom.iconStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "feature.dataZoom.iconStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "feature.dataZoom.emphasis.iconStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.dataZoom.emphasis.iconStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.dataZoom.emphasis.iconStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "feature.dataZoom.emphasis.iconStyle.borderType": {
    "desc": "\n\n\n<p>描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">borderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "feature.dataZoom.emphasis.iconStyle.borderDashOffset": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">borderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "feature.dataZoom.emphasis.iconStyle.borderCap": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于指定线段末端的绘制方式，可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: 线段末端以方形结束。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 线段末端以圆形结束。</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;butt&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "feature.dataZoom.emphasis.iconStyle.borderJoin": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。</p>\n<p>可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 \n<code class=\"codespan\">borderMiterLimit</code>\n属性看到效果。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;bevel&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "feature.dataZoom.emphasis.iconStyle.borderMiterLimit": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置斜接面限制比例。只有当 \n<code class=\"codespan\">borderJoin</code>\n 为 <code class=\"codespan\">miter</code> 时，\n<code class=\"codespan\">borderMiterLimit</code>\n 才有效。</p>\n<p>默认值为 <code class=\"codespan\">10</code>。负数、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> 和 <code class=\"codespan\">NaN</code> 均会被忽略。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "feature.dataZoom.emphasis.iconStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "feature.dataZoom.emphasis.iconStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "feature.dataZoom.emphasis.iconStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "feature.dataZoom.emphasis.iconStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "feature.dataZoom.emphasis.iconStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "feature.dataZoom.emphasis.iconStyle.textPosition": {
    "desc": "<p>文本位置，<code class=\"codespan\">&#39;left&#39;</code> / <code class=\"codespan\">&#39;right&#39;</code> / <code class=\"codespan\">&#39;top&#39;</code> / <code class=\"codespan\">&#39;bottom&#39;</code>。</p>\n"
  },
  "feature.dataZoom.emphasis.iconStyle.textFill": {
    "desc": "\n\n<p>文本颜色，如果未设定，则依次取图标 emphasis 时候的填充色、描边色，如果都不存在，则为 <code class=\"codespan\">&#39;#000&#39;</code>。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.dataZoom.emphasis.iconStyle.textAlign": {
    "desc": "\n\n<p>文本对齐方式，<code class=\"codespan\">&#39;left&#39;</code> / <code class=\"codespan\">&#39;center&#39;</code> / <code class=\"codespan\">&#39;right&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "feature.dataZoom.emphasis.iconStyle.textBackgroundColor": {
    "desc": "\n\n<p>文本区域填充色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.dataZoom.emphasis.iconStyle.textBorderRadius": {
    "desc": "\n\n<p>文本区域圆角大小。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT,RB,LB"
    }
  },
  "feature.dataZoom.emphasis.iconStyle.textPadding": {
    "desc": "\n\n<p>文本区域内边距。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "feature.dataZoom.filterMode": {
    "desc": "<p>与 <a href=\"#dataZoom.filterMode\">dataZoom.filterMode</a> 含义和取值相同。</p>\n"
  },
  "feature.dataZoom.xAxisIndex": {
    "desc": "<p>指定哪些 <a href=\"#xAxis\">xAxis</a> 被控制。如果缺省则控制所有的x轴。如果设置为 <code class=\"codespan\">false</code> 则不控制任何x轴。如果设置成 <code class=\"codespan\">3</code> 则控制 axisIndex 为 <code class=\"codespan\">3</code> 的x轴。如果设置为 <code class=\"codespan\">[0, 3]</code> 则控制 axisIndex 为 <code class=\"codespan\">0</code> 和 <code class=\"codespan\">3</code> 的x轴。</p>\n"
  },
  "feature.dataZoom.yAxisIndex": {
    "desc": "<p>指定哪些 <a href=\"#yAxis\">yAxis</a> 被控制。如果缺省则控制所有的y轴。如果设置为 <code class=\"codespan\">false</code> 则不控制任何y轴。如果设置成 <code class=\"codespan\">3</code> 则控制 axisIndex 为 <code class=\"codespan\">3</code> 的y轴。如果设置为 <code class=\"codespan\">[0, 3]</code> 则控制 axisIndex 为 <code class=\"codespan\">0</code> 和 <code class=\"codespan\">3</code> 的y轴。</p>\n"
  },
  "feature.dataZoom.brushStyle": {
    "desc": "<p>刷选框样式</p>\n"
  },
  "feature.dataZoom.brushStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.dataZoom.brushStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.dataZoom.brushStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "feature.dataZoom.brushStyle.borderType": {
    "desc": "\n\n\n<p>描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">borderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "feature.dataZoom.brushStyle.borderDashOffset": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">borderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "feature.dataZoom.brushStyle.borderCap": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于指定线段末端的绘制方式，可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: 线段末端以方形结束。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 线段末端以圆形结束。</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;butt&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "feature.dataZoom.brushStyle.borderJoin": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。</p>\n<p>可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 \n<code class=\"codespan\">borderMiterLimit</code>\n属性看到效果。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;bevel&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "feature.dataZoom.brushStyle.borderMiterLimit": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置斜接面限制比例。只有当 \n<code class=\"codespan\">borderJoin</code>\n 为 <code class=\"codespan\">miter</code> 时，\n<code class=\"codespan\">borderMiterLimit</code>\n 才有效。</p>\n<p>默认值为 <code class=\"codespan\">10</code>。负数、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> 和 <code class=\"codespan\">NaN</code> 均会被忽略。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "feature.dataZoom.brushStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "feature.dataZoom.brushStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "feature.dataZoom.brushStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "feature.dataZoom.brushStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "feature.dataZoom.brushStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "feature.magicType": {
    "desc": "<p>动态类型切换\n<strong>示例：</strong></p>\n<pre><code class=\"lang-ts\">feature: {\n    magicType: {\n        type: [&#39;line&#39;, &#39;bar&#39;, &#39;stack&#39;]\n    }\n}\n</code></pre>\n"
  },
  "feature.magicType.show": {
    "desc": "<p>是否显示该工具。</p>\n"
  },
  "feature.magicType.type": {
    "desc": "<p>启用的动态类型，包括<code class=\"codespan\">&#39;line&#39;</code>（切换为折线图）, <code class=\"codespan\">&#39;bar&#39;</code>（切换为柱状图）, <code class=\"codespan\">&#39;stack&#39;</code>（切换为堆叠模式）。</p>\n"
  },
  "feature.magicType.title": {
    "desc": "<p>各个类型的标题文本，可以分别配置。</p>\n"
  },
  "feature.magicType.icon": {
    "desc": "<p>各个类型的 icon path，可以分别配置。</p>\n"
  },
  "feature.magicType.icon.line": {
    "desc": "<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
  },
  "feature.magicType.icon.bar": {
    "desc": "<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
  },
  "feature.magicType.icon.stack": {
    "desc": "<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
  },
  "feature.magicType.iconStyle": {
    "desc": "<p>动态类型切换 icon 样式设置。由于 icon 的文本信息只在 icon hover 时候才显示，所以文字相关的配置项请在 <code class=\"codespan\">emphasis</code> 下设置。</p>\n"
  },
  "feature.magicType.iconStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.magicType.iconStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.magicType.iconStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "feature.magicType.iconStyle.borderType": {
    "desc": "\n\n\n<p>描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">borderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "feature.magicType.iconStyle.borderDashOffset": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">borderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "feature.magicType.iconStyle.borderCap": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于指定线段末端的绘制方式，可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: 线段末端以方形结束。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 线段末端以圆形结束。</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;butt&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "feature.magicType.iconStyle.borderJoin": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。</p>\n<p>可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 \n<code class=\"codespan\">borderMiterLimit</code>\n属性看到效果。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;bevel&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "feature.magicType.iconStyle.borderMiterLimit": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置斜接面限制比例。只有当 \n<code class=\"codespan\">borderJoin</code>\n 为 <code class=\"codespan\">miter</code> 时，\n<code class=\"codespan\">borderMiterLimit</code>\n 才有效。</p>\n<p>默认值为 <code class=\"codespan\">10</code>。负数、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> 和 <code class=\"codespan\">NaN</code> 均会被忽略。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "feature.magicType.iconStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "feature.magicType.iconStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "feature.magicType.iconStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "feature.magicType.iconStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "feature.magicType.iconStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "feature.magicType.emphasis.iconStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.magicType.emphasis.iconStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.magicType.emphasis.iconStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "feature.magicType.emphasis.iconStyle.borderType": {
    "desc": "\n\n\n<p>描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">borderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "feature.magicType.emphasis.iconStyle.borderDashOffset": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">borderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "feature.magicType.emphasis.iconStyle.borderCap": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于指定线段末端的绘制方式，可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: 线段末端以方形结束。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 线段末端以圆形结束。</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;butt&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "feature.magicType.emphasis.iconStyle.borderJoin": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。</p>\n<p>可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 \n<code class=\"codespan\">borderMiterLimit</code>\n属性看到效果。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;bevel&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "feature.magicType.emphasis.iconStyle.borderMiterLimit": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置斜接面限制比例。只有当 \n<code class=\"codespan\">borderJoin</code>\n 为 <code class=\"codespan\">miter</code> 时，\n<code class=\"codespan\">borderMiterLimit</code>\n 才有效。</p>\n<p>默认值为 <code class=\"codespan\">10</code>。负数、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> 和 <code class=\"codespan\">NaN</code> 均会被忽略。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "feature.magicType.emphasis.iconStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "feature.magicType.emphasis.iconStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "feature.magicType.emphasis.iconStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "feature.magicType.emphasis.iconStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "feature.magicType.emphasis.iconStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "feature.magicType.emphasis.iconStyle.textPosition": {
    "desc": "<p>文本位置，<code class=\"codespan\">&#39;left&#39;</code> / <code class=\"codespan\">&#39;right&#39;</code> / <code class=\"codespan\">&#39;top&#39;</code> / <code class=\"codespan\">&#39;bottom&#39;</code>。</p>\n"
  },
  "feature.magicType.emphasis.iconStyle.textFill": {
    "desc": "\n\n<p>文本颜色，如果未设定，则依次取图标 emphasis 时候的填充色、描边色，如果都不存在，则为 <code class=\"codespan\">&#39;#000&#39;</code>。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.magicType.emphasis.iconStyle.textAlign": {
    "desc": "\n\n<p>文本对齐方式，<code class=\"codespan\">&#39;left&#39;</code> / <code class=\"codespan\">&#39;center&#39;</code> / <code class=\"codespan\">&#39;right&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "feature.magicType.emphasis.iconStyle.textBackgroundColor": {
    "desc": "\n\n<p>文本区域填充色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "feature.magicType.emphasis.iconStyle.textBorderRadius": {
    "desc": "\n\n<p>文本区域圆角大小。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT,RB,LB"
    }
  },
  "feature.magicType.emphasis.iconStyle.textPadding": {
    "desc": "\n\n<p>文本区域内边距。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "feature.magicType.option": {
    "desc": "<p>各个类型的专有配置项。在切换到某类型的时候会合并相应的配置项。</p>\n"
  },
  "feature.magicType.seriesIndex": {
    "desc": "<p>各个类型对应的系列的列表。</p>\n"
  },
  "feature.brush": {
    "desc": "<p>选框组件的控制按钮。</p>\n<p>也可以不在这里指定，而是在 <a href=\"#brush.toolbox\">brush.toolbox</a> 中指定。</p>\n"
  },
  "feature.brush.type": {
    "desc": "<p>使用的按钮，取值：</p>\n<ul>\n<li><code class=\"codespan\">&#39;rect&#39;</code>：开启矩形选框选择功能。</li>\n<li><code class=\"codespan\">&#39;polygon&#39;</code>：开启任意形状选框选择功能。</li>\n<li><code class=\"codespan\">&#39;lineX&#39;</code>：开启横向选择功能。</li>\n<li><code class=\"codespan\">&#39;lineY&#39;</code>：开启纵向选择功能。</li>\n<li><code class=\"codespan\">&#39;keep&#39;</code>：切换『单选』和『多选』模式。后者可支持同时画多个选框。前者支持单击清除所有选框。</li>\n<li><code class=\"codespan\">&#39;clear&#39;</code>：清空所有选框。</li>\n</ul>\n"
  },
  "feature.brush.icon": {
    "desc": "<p>每个按钮的 icon path。</p>\n"
  },
  "feature.brush.icon.rect": {
    "desc": "<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
  },
  "feature.brush.icon.polygon": {
    "desc": "<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
  },
  "feature.brush.icon.lineX": {
    "desc": "<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
  },
  "feature.brush.icon.lineY": {
    "desc": "<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
  },
  "feature.brush.icon.keep": {
    "desc": "<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
  },
  "feature.brush.icon.clear": {
    "desc": "<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
  },
  "feature.brush.title": {
    "desc": "<p>标题文本。</p>\n"
  },
  "iconStyle": {
    "desc": "<p>公用的 icon 样式设置。由于 icon 的文本信息只在 icon hover 时候才显示，所以文字相关的配置项请在 <code class=\"codespan\">emphasis</code> 下设置。</p>\n"
  },
  "iconStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "iconStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "iconStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "iconStyle.borderType": {
    "desc": "\n\n\n<p>描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">borderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "iconStyle.borderDashOffset": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">borderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "iconStyle.borderCap": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于指定线段末端的绘制方式，可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: 线段末端以方形结束。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 线段末端以圆形结束。</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;butt&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "iconStyle.borderJoin": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。</p>\n<p>可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 \n<code class=\"codespan\">borderMiterLimit</code>\n属性看到效果。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;bevel&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "iconStyle.borderMiterLimit": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置斜接面限制比例。只有当 \n<code class=\"codespan\">borderJoin</code>\n 为 <code class=\"codespan\">miter</code> 时，\n<code class=\"codespan\">borderMiterLimit</code>\n 才有效。</p>\n<p>默认值为 <code class=\"codespan\">10</code>。负数、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> 和 <code class=\"codespan\">NaN</code> 均会被忽略。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "iconStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "iconStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "iconStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "iconStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "iconStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "emphasis.iconStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.iconStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.iconStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.iconStyle.borderType": {
    "desc": "\n\n\n<p>描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">borderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "emphasis.iconStyle.borderDashOffset": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">borderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "emphasis.iconStyle.borderCap": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于指定线段末端的绘制方式，可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: 线段末端以方形结束。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 线段末端以圆形结束。</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;butt&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "emphasis.iconStyle.borderJoin": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。</p>\n<p>可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 \n<code class=\"codespan\">borderMiterLimit</code>\n属性看到效果。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;bevel&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "emphasis.iconStyle.borderMiterLimit": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置斜接面限制比例。只有当 \n<code class=\"codespan\">borderJoin</code>\n 为 <code class=\"codespan\">miter</code> 时，\n<code class=\"codespan\">borderMiterLimit</code>\n 才有效。</p>\n<p>默认值为 <code class=\"codespan\">10</code>。负数、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> 和 <code class=\"codespan\">NaN</code> 均会被忽略。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "emphasis.iconStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.iconStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "emphasis.iconStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "emphasis.iconStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "emphasis.iconStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "emphasis.iconStyle.textPosition": {
    "desc": "<p>文本位置，<code class=\"codespan\">&#39;left&#39;</code> / <code class=\"codespan\">&#39;right&#39;</code> / <code class=\"codespan\">&#39;top&#39;</code> / <code class=\"codespan\">&#39;bottom&#39;</code>。</p>\n"
  },
  "emphasis.iconStyle.textFill": {
    "desc": "\n\n<p>文本颜色，如果未设定，则依次取图标 emphasis 时候的填充色、描边色，如果都不存在，则为 <code class=\"codespan\">&#39;#000&#39;</code>。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.iconStyle.textAlign": {
    "desc": "\n\n<p>文本对齐方式，<code class=\"codespan\">&#39;left&#39;</code> / <code class=\"codespan\">&#39;center&#39;</code> / <code class=\"codespan\">&#39;right&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "emphasis.iconStyle.textBackgroundColor": {
    "desc": "\n\n<p>文本区域填充色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.iconStyle.textBorderRadius": {
    "desc": "\n\n<p>文本区域圆角大小。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT,RB,LB"
    }
  },
  "emphasis.iconStyle.textPadding": {
    "desc": "\n\n<p>文本区域内边距。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "zlevel": {
    "desc": "<p>所有图形的 zlevel 值。</p>\n<p><code class=\"codespan\">zlevel</code>用于 Canvas 分层，不同<code class=\"codespan\">zlevel</code>值的图形会放置在不同的 Canvas 中，Canvas 分层是一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的<code class=\"codespan\">zlevel</code>。需要注意的是过多的 Canvas 会引起内存开销的增大，在手机端上需要谨慎使用以防崩溃。</p>\n<p><code class=\"codespan\">zlevel</code> 大的 Canvas 会放在 <code class=\"codespan\">zlevel</code> 小的 Canvas 的上面。</p>\n"
  },
  "z": {
    "desc": "<p>组件的所有图形的<code class=\"codespan\">z</code>值。控制图形的前后顺序。<code class=\"codespan\">z</code>值小的图形会被<code class=\"codespan\">z</code>值大的图形覆盖。</p>\n<p><code class=\"codespan\">z</code>相比<code class=\"codespan\">zlevel</code>优先级更低，而且不会创建新的 Canvas。</p>\n"
  },
  "left": {
    "desc": "\n\n<p>工具栏组件离容器左侧的距离。</p>\n<p><code class=\"codespan\">left</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高宽的百分比，也可以是 <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, <code class=\"codespan\">&#39;right&#39;</code>。</p>\n<p>如果 <code class=\"codespan\">left</code> 的值为<code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, <code class=\"codespan\">&#39;right&#39;</code>，组件会根据相应的位置自动对齐。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "top": {
    "desc": "\n\n<p>工具栏组件离容器上侧的距离。</p>\n<p><code class=\"codespan\">top</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高宽的百分比，也可以是 <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;bottom&#39;</code>。</p>\n<p>如果 <code class=\"codespan\">top</code> 的值为<code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;bottom&#39;</code>，组件会根据相应的位置自动对齐。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "right": {
    "desc": "\n\n<p>工具栏组件离容器右侧的距离。</p>\n<p><code class=\"codespan\">right</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高宽的百分比。</p>\n<p>默认自适应。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "bottom": {
    "desc": "\n\n<p>工具栏组件离容器下侧的距离。</p>\n<p>bottom 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高宽的百分比。</p>\n<p>默认自适应。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "width": {
    "desc": "\n\n<p>工具栏组件的宽度。默认自适应。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "50%"
    }
  },
  "height": {
    "desc": "\n\n<p>工具栏组件的高度。默认自适应。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "50%"
    }
  },
  "tooltip": {
    "desc": "<p>工具箱的 tooltip 配置，配置项同 <a href=\"#tooltip\">tooltip</a>。默认不显示，可以在需要特殊定制文字样式（尤其是想用自定义 CSS 控制文字样式）的时候开启 tooltip，如下示例：</p>\n<pre><code class=\"lang-ts\">option = {\n    tooltip: {\n        show: true // 必须引入 tooltip 组件\n    },\n    toolbox: {\n        show: true,\n        showTitle: false, // 隐藏默认文字，否则两者位置会重叠\n        feature: {\n            saveAsImage: {\n                show: true,\n                title: &#39;Save As Image&#39;\n            },\n            dataView: {\n                show: true,\n                title: &#39;Data View&#39;\n            },\n        },\n        tooltip: { // 和 option.tooltip 的配置项相同\n            show: true,\n            formatter: function (param) {\n                return return &#39;&lt;div&gt;&#39; + param.title + &#39;&lt;/div&gt;&#39;; // 自定义的 DOM 结构\n            },\n            backgroundColor: &#39;#222&#39;,\n            textStyle: {\n                fontSize: 12,\n            },\n            extraCssText: &#39;box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);&#39; // 自定义的 CSS 样式\n        }\n    },\n    ...\n}\n</code></pre>\n"
  }
}