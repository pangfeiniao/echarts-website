window.__EC_DOC_option_axisPointer = {
  "id": {
    "desc": "<p>Component ID, not specified by default. If specified, it can be used to refer the component in option or API.</p>\n"
  },
  "show": {
    "desc": "\n\n<p>axisPointer will not be displayed by default. But if <a href=\"#tooltip.trigger\">tooltip.trigger</a> is set as <code class=\"codespan\">&#39;axis&#39;</code> or <a href=\"#tooltip.axisPointer.type\">tooltip.axisPointer.type</a> is set as  <code class=\"codespan\">&#39;cross&#39;</code>, axisPointer will be displayed automatically. Each coordinate system will automatically chose the axes whose will display its axisPointer. <a href=\"#tooltip.axisPointer.axis\">tooltip.axisPointer.axis</a> can be used to change the choice.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "type": {
    "desc": "\n\n<p>Indicator type.</p>\n<p>Options:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;line&#39;</code> line indicator.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;shadow&#39;</code> shadow crosshair indicator.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;none&#39;</code> no indicator displayed.</p>\n</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "line,shadow,none"
    }
  },
  "snap": {
    "desc": "<p>Whether snap to point automatically. The default value is auto determined.</p>\n<p>This feature usually makes sense in value axis and time axis, where tiny points can be seeked automatically.</p>\n"
  },
  "z": {
    "desc": "<p>z value, which controls order of drawing graphical components. Components with smaller <code class=\"codespan\">z</code> values may be overwritten by those with larger <code class=\"codespan\">z</code> values.</p>\n"
  },
  "label": {
    "desc": "<p>label of axisPointer</p>\n"
  },
  "label.show": {
    "desc": "<p>Whether show label. Label will not show by default. But if <a href=\"#tooltip.axisPointer.type\">tooltip.axisPointer.type</a> is set as  <code class=\"codespan\">&#39;cross&#39;</code>, label will be displayed automatically.</p>\n"
  },
  "label.precision": {
    "desc": "<p>The precision of value in label. It is auto determined by default. You can also set it as <code class=\"codespan\">&#39;2&#39;</code>, which indicates that two decimal fractions are reserved.</p>\n"
  },
  "label.formatter": {
    "desc": "<p>The formatter of label.</p>\n<p>If set as <code class=\"codespan\">string</code>, for example it can be: <code class=\"codespan\">formatter: &#39;some text {value} some text</code>, where <code class=\"codespan\">{value}</code> will be replaced by axis value automatically.</p>\n<p>If set as <code class=\"codespan\">function</code>:</p>\n<p><strong>Parameters:</strong></p>\n<p><code class=\"codespan\">{Object}</code> params: Including fields as follows:</p>\n<p><code class=\"codespan\">{Object}</code> params.value: current value of this axis. If <code class=\"codespan\">axis.type</code> is <code class=\"codespan\">&#39;category&#39;</code>, it is one of the value in <code class=\"codespan\">axis.data</code>. If <code class=\"codespan\">axis.type</code> is <code class=\"codespan\">&#39;time&#39;</code>, it is a timestamp.</p>\n<p><code class=\"codespan\">{Array.&lt;Object&gt;}</code> params.seriesData: An array, containing info of nearest points. Each item is:</p>\n<p><code class=\"codespan\">{string}</code> params.axisDimension: The dimension name of the axis. For example, in catesian it will be <code class=\"codespan\">&#39;x&#39;</code>, <code class=\"codespan\">&#39;y&#39;</code>, and in polar it will be <code class=\"codespan\">&#39;radius&#39;</code>, <code class=\"codespan\">&#39;angle&#39;</code>.</p>\n<p><code class=\"codespan\">{number}</code> params.axisIndex: The index of the axis, for example, <code class=\"codespan\">0</code>,<code class=\"codespan\">1</code>, <code class=\"codespan\">2</code>, ...</p>\n<pre><code class=\"lang-ts\">{\n    componentType: &#39;series&#39;,\n    // Series type\n    seriesType: string,\n    // Series index in option.series\n    seriesIndex: number,\n    // Series name\n    seriesName: string,\n    // Data name, or category name\n    name: string,\n    // Data index in input data array\n    dataIndex: number,\n    // Original data as input\n    data: Object,\n    // Value of data. In most series it is the same as data.\n    // But in some series it is some part of the data (e.g., in map, radar)\n    value: number|Array|Object,\n    // encoding info of coordinate system\n    // Key: coord, like (&#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39;)\n    // value: Must be an array, not null/undefined. Contain dimension indices, like:\n    // {\n    //     x: [2] // values on dimension index 2 are mapped to x axis.\n    //     y: [0] // values on dimension index 0 are mapped to y axis.\n    // }\n    encode: Object,\n    // dimension names list\n    dimensionNames: Array&lt;String&gt;,\n    // data dimension index, for example 0 or 1 or 2 ...\n    // Only work in `radar` series.\n    dimensionIndex: number,\n    // Color of data\n    color: string,\n\n\n\n\n\n\n\nEach item also includes axis infomation:\n\n```ts\n{\n    axisDim: &#39;x&#39;, // &#39;x&#39;, &#39;y&#39;, &#39;angle&#39;, &#39;radius&#39;, &#39;single&#39;\n    axisId: &#39;xxx&#39;,\n    axisName: &#39;xxx&#39;,\n    axisIndex: 3,\n    axisValue: 121, // The current value of axisPointer\n    axisValueLabel: &#39;text of value&#39;\n}\n</code></pre>\n<p><strong>Return:</strong></p>\n<p>The string to be displayed.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">formatter: function (params) {\n    // If axis.type is &#39;time&#39;\n    return &#39;some text&#39; + echarts.format.formatTime(params.value);\n}\n</code></pre>\n"
  },
  "label.margin": {
    "desc": "<p>Distance between label and axis.</p>\n"
  },
  "label.color": {
    "desc": "\n\n<p> text color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "'#fff'"
    }
  },
  "label.fontStyle": {
    "desc": "\n\n<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "label.fontWeight": {
    "desc": "\n\n<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "label.fontFamily": {
    "desc": "\n\n<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "label.fontSize": {
    "desc": "\n\n<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "label.lineHeight": {
    "desc": "\n\n<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-ts\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "label.width": {
    "desc": "\n\n<p>Width of text block.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "label.height": {
    "desc": "\n\n<p>Height of text block.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "label.textBorderColor": {
    "desc": "\n\n<p>Storke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "label.textBorderWidth": {
    "desc": "\n\n<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "label.textBorderType": {
    "desc": "\n\n\n<p>Stroke line type of the text.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">textBorderDashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-ts\">{\n\ntextBorderType: [5, 10],\n\ntextBorderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "label.textBorderDashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">textBorderType</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "label.textShadowColor": {
    "desc": "\n\n<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "label.textShadowBlur": {
    "desc": "\n\n<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "label.textShadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "label.textShadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "label.overflow": {
    "desc": "\n\n<p>Determine how to display the text when it&#39;s overflow. Available when <code class=\"codespan\">width</code> is set.</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> Truncate the text and trailing with <code class=\"codespan\">ellipsis</code>.</li>\n<li><code class=\"codespan\">&#39;break&#39;</code> Break by word</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> Break by character.</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "label.ellipsis": {
    "desc": "<p>Ellipsis to be displayed when <code class=\"codespan\">overflow</code> is set to <code class=\"codespan\">truncate</code>.</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> Truncate the overflow lines.</li>\n</ul>\n"
  },
  "label.padding": {
    "desc": "\n\n<p>axisPointer space around content. The unit is px. Default values for each position are 5. And they can be set to different values with left, right, top, and bottom.</p>\n<p>Examples:</p>\n<pre><code class=\"lang-ts\">// Set padding to be 5\npadding: 5\n// Set the top and bottom paddings to be 5, and left and right paddings to be 10\npadding: [5, 10]\n// Set each of the four paddings seperately\npadding: [\n    5,  // up\n    10, // right\n    5,  // down\n    10, // left\n]\n</code></pre>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "label.backgroundColor": {
    "desc": "<p>Background color of label, the same as <a href=\"#xAxis.axisLine.lineStyle.color\">axis.axisLine.lineStyle.color</a> by default.</p>\n"
  },
  "label.borderColor": {
    "desc": "<p>Border color of label.</p>\n"
  },
  "label.borderWidth": {
    "desc": "<p>Border width of label.</p>\n"
  },
  "label.shadowBlur": {
    "desc": "\n\n<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "3",
      "min": "0",
      "step": "0.5"
    }
  },
  "label.shadowColor": {
    "desc": "\n\n<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#aaa"
    }
  },
  "label.shadowOffsetX": {
    "desc": "\n\n<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "label.shadowOffsetY": {
    "desc": "\n\n<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "lineStyle": {
    "desc": "<p>It is valid when <a href=\"#tooltip.axisPointer.type\">axisPointer.type</a> is <code class=\"codespan\">&#39;line&#39;</code>.</p>\n"
  },
  "lineStyle.color": {
    "desc": "\n\n<p>Line color. </p>\n<blockquote>\n<p>Supports setting as solid color using <code class=\"codespan\">rgb(255,255,255)</code>, <code class=\"codespan\">rgba(255,255,255,1)</code>, <code class=\"codespan\">#fff</code>, etc. Also supports setting as gradient color and pattern fill, see <a href=\"#color\">option.color</a> for details</p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "lineStyle.width": {
    "desc": "\n\n<p> line width.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "lineStyle.type": {
    "desc": "\n\n\n<p>line type.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">dashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-ts\">{\n\ntype: [5, 10],\n\ndashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "lineStyle.dashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">type</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "lineStyle.cap": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To specify how to draw the end points of the line.\nPossible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: The ends of lines are squared off at the endpoints.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: The ends of lines are rounded.</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: The ends of lines are squared off by adding a box with an equal width and half the height of the line&#39;s thickness.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;butt&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "lineStyle.join": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To determine the shape used to join two line segments where they meet.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the \n<code class=\"codespan\">miterLimit</code>\nproperty.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;bevel&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "lineStyle.miterLimit": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the miter limit ratio. Only works when \n<code class=\"codespan\">join</code>\n is set as <code class=\"codespan\">miter</code>.</p>\n<p>Default value is <code class=\"codespan\">10</code>. Negative、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> and <code class=\"codespan\">NaN</code> values are ignored.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "lineStyle.shadowBlur": {
    "desc": "\n\n<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "lineStyle.shadowColor": {
    "desc": "\n\n<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "lineStyle.shadowOffsetX": {
    "desc": "\n\n<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "lineStyle.shadowOffsetY": {
    "desc": "\n\n<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "lineStyle.opacity": {
    "desc": "\n\n<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "shadowStyle": {
    "desc": "<p>It is valid when <a href=\"#tooltip.axisPointer.type\">axisPointer.type</a> is <code class=\"codespan\">&#39;shadow&#39;</code>.</p>\n"
  },
  "shadowStyle.color": {
    "desc": "\n\n<p>Fill color. </p>\n<blockquote>\n<p>Supports setting as solid color using <code class=\"codespan\">rgb(255,255,255)</code>, <code class=\"codespan\">rgba(255,255,255,1)</code>, <code class=\"codespan\">#fff</code>, etc. Also supports setting as gradient color and pattern fill, see <a href=\"#color\">option.color</a> for details</p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "shadowStyle.shadowBlur": {
    "desc": "\n\n<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "shadowStyle.shadowColor": {
    "desc": "\n\n<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "shadowStyle.shadowOffsetX": {
    "desc": "\n\n<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "shadowStyle.shadowOffsetY": {
    "desc": "\n\n<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "shadowStyle.opacity": {
    "desc": "\n\n<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "triggerTooltip": {
    "desc": "\n\n<p>Whether to trigger tooltip.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "value": {
    "desc": "<p>current value. When using <a href=\"xAxisPointer.handle\" target=\"_blank\">axisPointer.handle</a>, <code class=\"codespan\">value</code> can be set to define the initail position of axisPointer.</p>\n"
  },
  "status": {
    "desc": "\n\n<p>Current status, can be <code class=\"codespan\">&#39;show&#39;</code> 和 <code class=\"codespan\">&#39;hide&#39;</code>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "show,hide"
    }
  },
  "handle": {
    "desc": "<p>A button used to drag axisPointer. This feature is applicable in touch device. See <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-tooltip-touch&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a>.</p>\n"
  },
  "handle.show": {
    "desc": "\n\n<p>Set to <code class=\"codespan\">true</code> to use handle.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "handle.icon": {
    "desc": "\n\n<p>The icon of the handle.</p>\n<p>It can be set to an image with <code class=\"codespan\">&#39;image://url&#39;</code> , in which URL is the link to an image, or <code class=\"codespan\">dataURI</code> of an image.</p>\n<p>An image URL example:</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>A <code class=\"codespan\">dataURI</code> example:</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>Icons can be set to arbitrary vector path via <code class=\"codespan\">&#39;path://&#39;</code> in ECharts. As compared with a raster image, vector paths prevent jagging and blurring when scaled, and have better control over changing colors. The size of the vector icon will be adapted automatically. Refer to <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a> for more information about the format of the path. You may export vector paths from tools like Adobe </p>\n<p>For example:</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre><p>See the <a href=\"https://echarts.apache.org/examples/en/editor.html?c=doc-example/axisPointer-handle-image&amp;edit=1&amp;reset=1\" target=\"_blank\">example of using image</a></p>\n",
    "uiControl": {
      "type": "icon",
      "clean": "true"
    }
  },
  "handle.size": {
    "desc": "\n\n<p>The size of the handle, which can be set as a single value or an array (<code class=\"codespan\">[width, height]</code>).</p>\n",
    "uiControl": {
      "type": "vector",
      "default": "45,45",
      "min": "0",
      "step": "0.5",
      "dims": "width,height"
    }
  },
  "handle.margin": {
    "desc": "\n\n<p>Distance from handle center to axis.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "0",
      "step": "0.5"
    }
  },
  "handle.color": {
    "desc": "\n\n<p>The color of the handle.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "handle.throttle": {
    "desc": "\n\n<p>Throttle rate of trigger view update when dragging handle, in ms. Increase the value to improve performance, but decrease the experience.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "40",
      "min": "0",
      "step": "10"
    }
  },
  "handle.shadowBlur": {
    "desc": "\n\n<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "3",
      "min": "0",
      "step": "0.5"
    }
  },
  "handle.shadowColor": {
    "desc": "\n\n<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#aaa"
    }
  },
  "handle.shadowOffsetX": {
    "desc": "\n\n<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "2",
      "step": "0.5"
    }
  },
  "handle.shadowOffsetY": {
    "desc": "\n\n<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "link": {
    "desc": "<p>axisPointers can be linked to each other. The term &quot;link&quot; represents that axes are synchronized and move together. Axes are linked according to the value of axisPointer.</p>\n<p>See <a href=\"https://echarts.apache.org/examples/en/view.html?c=candlestick-brush&amp;edit=1&amp;reset=1\" target=\"_blank\">sampleA</a> and <a href=\"https://echarts.apache.org/examples/en/view.html?c=scatter-nutrients-matrix&amp;edit=1&amp;reset=1\" target=\"_blank\">sampleB</a>.</p>\n<p>link is an array, where each item represents a &quot;link group&quot;. Axes will be linked when they are refered in the same link group. For example:</p>\n<pre><code class=\"lang-ts\">link: [\n    {\n        // All axes with xAxisIndex 0, 3, 4 and yAxisName &#39;sameName&#39; will be linked.\n        xAxisIndex: [0, 3, 4],\n        yAxisName: &#39;someName&#39;\n    },\n    {\n        // All axes with xAxisId &#39;aa&#39;, &#39;cc&#39; and all angleAxis will be linked.\n        xAxisId: [&#39;aa&#39;, &#39;cc&#39;],\n        angleAxis: &#39;all&#39;\n    },\n    ...\n]\n</code></pre>\n<p>As illustrated above, axes can be refered in these approaches in a link group:</p>\n<pre><code class=\"lang-ts\">{\n    // &#39;some&#39; represent the dimension name of a axis, namely, &#39;x&#39;, &#39;y&#39;, &#39;radius&#39;, &#39;angle&#39;, &#39;single&#39;\n    someAxisIndex: [...], // can be an array or a value or &#39;all&#39;\n    someAxisName: [...],  // can be an array or a value or &#39;all&#39;\n    someAxisId: [...],    // can be an array or a value or &#39;all&#39;\n}\n</code></pre>\n<hr>\n<hr>\n<p><strong>How to link axes with different <a href=\"#xAxis.type\">axis.type</a>?</strong></p>\n<p>For example, the type of axisA is &#39;category&#39;, and the type of axisB type is &#39;time&#39;, we can write conversion function (mapper) in link group to convert values from an axis to another axis. For example:</p>\n<pre><code class=\"lang-ts\">link: [{\n    xAxisIndex: [0, 1],\n    yAxisName: [&#39;yy&#39;],\n    mapper: function (sourceVal, sourceAxisInfo, targetAxisInfo) {\n        if (sourceAxisInfo.axisName === &#39;yy&#39;) {\n            // from timestamp to &#39;2012-02-05&#39;\n            return echarts.format.formatTime(&#39;yyyy-MM-dd&#39;, sourceVal);\n        }\n        else if (targetAxisInfo.axisName === &#39;yy&#39;) {\n            // from &#39;2012-02-05&#39; to date\n            return echarts.number.parseDate(dates[sourceVal]);\n        }\n        else {\n            return sourceVal;\n        }\n    }\n}]\n</code></pre>\n<p>Input parameters of mapper:</p>\n<p><code class=\"codespan\">{number}</code> sourceVal</p>\n<p><code class=\"codespan\">{Object}</code> sourceAxisInfo Including {axisDim, axisId, axisName, axisIndex, ...}</p>\n<p><code class=\"codespan\">{Object}</code> targetAxisInfo Including {axisDim, axisId, axisName, axisIndex, ...}</p>\n<p>Return of mapper:</p>\n<p><code class=\"codespan\">{number}</code> The result of conversion.</p>\n"
  },
  "triggerOn": {
    "desc": "\n\n<p>Conditions to trigger tooltip. Options:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;mousemove&#39;</code></p>\n<p>  Trigger when mouse moves.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;click&#39;</code></p>\n<p>  Trigger when mouse clicks.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;mousemove|click&#39;</code></p>\n<p>  Trigger when mouse clicks and moves.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;none&#39;</code></p>\n<p>  Do not triggered by <code class=\"codespan\">&#39;mousemove&#39;</code> and <code class=\"codespan\">&#39;click&#39;</code></p>\n</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "mousemove,click,none"
    }
  }
}