window.__EC_DOC_option_tooltip = {
  "show": {
    "desc": "\n\n<p>Whether to show the tooltip component.</p>\n<p>including tooltip floating layer and <a href=\"#tooltip.axisPointer\">axisPointer</a>.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "trigger": {
    "desc": "\n\n<p>Type of triggering.</p>\n<p>Options:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;item&#39;</code></p>\n<p>  Triggered by data item, which is mainly used for charts that don&#39;t have a category axis like scatter charts or pie charts.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;axis&#39;</code></p>\n<p>  Triggered by axes, which is mainly used for charts that have category axes, like bar charts or line charts.</p>\n<p> ECharts 2.x only supports axis trigger for category axis. In ECharts 3, it is supported for all types of axes in <a href=\"#grid\">grid</a> or <a href=\"#polar\">polar</a>. Also, you may assign axis with <a href=\"#tooltip.axisPointer.axis\">axisPointer.axis</a>.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;none&#39;</code></p>\n<p>  Trigger nothing.</p>\n</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "item,axis,none",
      "default": "item"
    }
  },
  "axisPointer": {
    "desc": "<p>Configuration item for axisPointer.</p>\n<p><code class=\"codespan\">tooltip.axisPointer</code> is like syntactic sugar of axisPointer settings on axes (for example, <a href=\"#xAxis.axisPointer\">xAxis.axisPointer</a> or <a href=\"#angleAxis.axisPointer\">angleAxis.axisPointer</a>). More detailed features can be configured on <code class=\"codespan\">someAxis.axisPointer</code>. But in common cases, using <code class=\"codespan\">tooltip.axisPointer</code> is more convenient.</p>\n<blockquote>\n<p><strong>Notice:</strong> configurations of <code class=\"codespan\">tooltip.axisPointer</code> has lower priority than that of <code class=\"codespan\">someAxis.axisPointer</code>.</p>\n</blockquote>\n<hr>\n<p><code class=\"codespan\">axisPointer</code> is a tool for displaying reference line and axis value under mouse pointer.</p>\n<p>For example:</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/en/view.html?c=doc-example/candlestick-axisPointer&edit=1&reset=1\" width=\"600\" height=\"450\"></iframe>\n\n\n<p>In the demo above, <a href=\"#axisPointer.link\">axisPointer.link</a> is used to link axisPointer from different coordinate systems.</p>\n<p><code class=\"codespan\">axisPointer</code> can also be used on touch device, where user can drag the button to move the reference line and label.</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/en/view.html?c=line-tooltip-touch&edit=1&reset=1\" width=\"600\" height=\"400\"></iframe>\n\n\n<p>In the cases that more than one axis exist, axisPointer helps to look inside the data.</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/en/view.html?c=multiple-y-axis&edit=1&reset=1\" width=\"600\" height=\"300\"></iframe>\n\n<iframe  data-src=\"https://echarts.apache.org/examples/en/view.html?c=multiple-x-axis&edit=1&reset=1\" width=\"600\" height=\"300\"></iframe>\n\n\n\n<hr>\n<blockquote>\n<p><strong>Notice:</strong>\nGenerally, axisPointers is configured in each axes who need them (for example <a href=\"#xAxis.axisPointer\">xAxis.axisPointer</a>), or configured in <code class=\"codespan\">tooltip</code> (for example <a href=\"#tooltip.axisPointer\">tooltip.axisPointer</a>).</p>\n</blockquote>\n<blockquote>\n<p>But these configurations can only be configured in global axisPointer:\n<a href=\"#axisPointer.triggerOn\">axisPointer.triggerOn</a>, <a href=\"#axisPointer.link\">axisPointer.link</a>.</p>\n</blockquote>\n<hr>\n<hr>\n<p><strong>How to display axisPointer:</strong></p>\n<p>In <a href=\"#grid\">cartesian (grid)</a> and <a href=\"#single\">polar](~polar) and (single axis</a>, each axis has its own axisPointer.</p>\n<p>Those axisPointer will not be displayed by default, utill configured as follows:</p>\n<ul>\n<li><p>Set <code class=\"codespan\">someAxis.axisPointer.show</code> (like <a href=\"#xAxis.axisPointer.show\">xAxis.axisPointer.show</a>) as <code class=\"codespan\">true</code>. Then axisPointer of this axis will be displayed.</p>\n</li>\n<li><p>Set <a href=\"#tooltip.trigger\">tooltip.trigger</a> as <code class=\"codespan\">&#39;axis&#39;</code>, or set <a href=\"#tooltip.axisPointer.type\">tooltip.axisPointer.type</a> as <code class=\"codespan\">&#39;cross&#39;</code>. Then coordinate system will automatically chose the axes who will display their axisPointers. (<a href=\"#tooltip.axisPointer.axis\">tooltip.axisPointer.axis</a> can be used to change the choice.) Notice, <code class=\"codespan\">axis.axisPointer</code> will override <code class=\"codespan\">tooltip.axisPointer</code> settings.</p>\n</li>\n</ul>\n<hr>\n<p><strong>How to display the label of axisPointer:</strong></p>\n<p>The label of axisPointer will not be displayed by default(namely, only reference line will be displayed by default), utill configured as follows:</p>\n<ul>\n<li><p>Set <code class=\"codespan\">someAxis.axisPointer.label.show</code> (for example <a href=\"#xAxis.axisPointer.show\">xAxis.axisPointer.label.show</a>) as <code class=\"codespan\">true</code>. Then the label of the axisPointer will be displayed.</p>\n</li>\n<li><p>Set <a href=\"#tooltip.axisPointer.type\">tooltip.axisPointer.type</a> as  <code class=\"codespan\">&#39;cross&#39;</code>. Then the label of the crossed axisPointers will be displayed.</p>\n</li>\n</ul>\n<hr>\n<p><strong>How to configure axisPointer on touch device:</strong></p>\n<p>Set <code class=\"codespan\">someAxis.axisPointer.handle.show</code> (for example <a href=\"#xAxis.axisPointer.handle.show\">xAxis.axisPointer.handle.show</a> as <code class=\"codespan\">true</code>. Then the button for dragging will be displayed. (This feature is not supported on polar).</p>\n<p><strong>Notice:</strong>\nIf tooltip does not work well in this case, try to set<a href=\"#tooltip.triggerOn\">tooltip.triggerOn</a> as <code class=\"codespan\">&#39;none&#39;</code> (for the effect: show tooltip when finger holding on the button, and hide tooltip after finger left the button), or set <a href=\"#tooltip.alwaysShowContent\">tooltip.alwaysShowContent</a> as <code class=\"codespan\">true</code> (then tooltip will always be displayed).</p>\n<p>See the <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-tooltip-touch&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a>.</p>\n<hr>\n<p><strong>Snap to point</strong></p>\n<p>In value axis and time axis, if <a href=\"#xAxis.axisPointer.snap\">snap</a> is set as true, axisPointer will snap to point automatically.</p>\n<hr>\n"
  },
  "axisPointer.type": {
    "desc": "\n\n<p>Indicator type.</p>\n<p>Options:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;line&#39;</code> line indicator.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;shadow&#39;</code> shadow crosshair indicator.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;none&#39;</code> no indicator displayed.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;cross&#39;</code> crosshair indicator, which is actually the shortcut of enable two axisPointers of two orthometric axes.</p>\n</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "none,line,shadow,cross",
      "default": "line"
    }
  },
  "axisPointer.axis": {
    "desc": "<p>The coordinate axis, which could be <code class=\"codespan\">&#39;x&#39;</code>, <code class=\"codespan\">&#39;y&#39;</code>, <code class=\"codespan\">&#39;radius&#39;</code>, or <code class=\"codespan\">&#39;angle&#39;</code>. By default, each coordinate system will automatically chose the axes whose will display its axisPointer (category axis or time axis is used by default).</p>\n"
  },
  "axisPointer.snap": {
    "desc": "<p>Whether snap to point automatically. The default value is auto determined.</p>\n<p>This feature usually makes sense in value axis and time axis, where tiny points can be seeked automatically.</p>\n"
  },
  "axisPointer.z": {
    "desc": "<p>z value, which controls order of drawing graphical components. Components with smaller <code class=\"codespan\">z</code> values may be overwritten by those with larger <code class=\"codespan\">z</code> values.</p>\n"
  },
  "axisPointer.label": {
    "desc": "<p>label of axisPointer</p>\n"
  },
  "axisPointer.label.show": {
    "desc": "<p>Whether show label. Label will not show by default. But if <a href=\"#tooltip.axisPointer.type\">tooltip.axisPointer.type</a> is set as  <code class=\"codespan\">&#39;cross&#39;</code>, label will be displayed automatically.</p>\n"
  },
  "axisPointer.label.precision": {
    "desc": "<p>The precision of value in label. It is auto determined by default. You can also set it as <code class=\"codespan\">&#39;2&#39;</code>, which indicates that two decimal fractions are reserved.</p>\n"
  },
  "axisPointer.label.formatter": {
    "desc": "<p>The formatter of label.</p>\n<p>If set as <code class=\"codespan\">string</code>, for example it can be: <code class=\"codespan\">formatter: &#39;some text {value} some text</code>, where <code class=\"codespan\">{value}</code> will be replaced by axis value automatically.</p>\n<p>If set as <code class=\"codespan\">function</code>:</p>\n<p><strong>Parameters:</strong></p>\n<p><code class=\"codespan\">{Object}</code> params: Including fields as follows:</p>\n<p><code class=\"codespan\">{Object}</code> params.value: current value of this axis. If <code class=\"codespan\">axis.type</code> is <code class=\"codespan\">&#39;category&#39;</code>, it is one of the value in <code class=\"codespan\">axis.data</code>. If <code class=\"codespan\">axis.type</code> is <code class=\"codespan\">&#39;time&#39;</code>, it is a timestamp.</p>\n<p><code class=\"codespan\">{Array.&lt;Object&gt;}</code> params.seriesData: An array, containing info of nearest points. Each item is:</p>\n<p><code class=\"codespan\">{string}</code> params.axisDimension: The dimension name of the axis. For example, in catesian it will be <code class=\"codespan\">&#39;x&#39;</code>, <code class=\"codespan\">&#39;y&#39;</code>, and in polar it will be <code class=\"codespan\">&#39;radius&#39;</code>, <code class=\"codespan\">&#39;angle&#39;</code>.</p>\n<p><code class=\"codespan\">{number}</code> params.axisIndex: The index of the axis, for example, <code class=\"codespan\">0</code>,<code class=\"codespan\">1</code>, <code class=\"codespan\">2</code>, ...</p>\n<pre><code class=\"lang-ts\">{\n    componentType: &#39;series&#39;,\n    // Series type\n    seriesType: string,\n    // Series index in option.series\n    seriesIndex: number,\n    // Series name\n    seriesName: string,\n    // Data name, or category name\n    name: string,\n    // Data index in input data array\n    dataIndex: number,\n    // Original data as input\n    data: Object,\n    // Value of data. In most series it is the same as data.\n    // But in some series it is some part of the data (e.g., in map, radar)\n    value: number|Array|Object,\n    // encoding info of coordinate system\n    // Key: coord, like (&#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39;)\n    // value: Must be an array, not null/undefined. Contain dimension indices, like:\n    // {\n    //     x: [2] // values on dimension index 2 are mapped to x axis.\n    //     y: [0] // values on dimension index 0 are mapped to y axis.\n    // }\n    encode: Object,\n    // dimension names list\n    dimensionNames: Array&lt;String&gt;,\n    // data dimension index, for example 0 or 1 or 2 ...\n    // Only work in `radar` series.\n    dimensionIndex: number,\n    // Color of data\n    color: string,\n\n\n\n\n\n\n\nEach item also includes axis infomation:\n\n```ts\n{\n    axisDim: &#39;x&#39;, // &#39;x&#39;, &#39;y&#39;, &#39;angle&#39;, &#39;radius&#39;, &#39;single&#39;\n    axisId: &#39;xxx&#39;,\n    axisName: &#39;xxx&#39;,\n    axisIndex: 3,\n    axisValue: 121, // The current value of axisPointer\n    axisValueLabel: &#39;text of value&#39;\n}\n</code></pre>\n<p><strong>Return:</strong></p>\n<p>The string to be displayed.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">formatter: function (params) {\n    // If axis.type is &#39;time&#39;\n    return &#39;some text&#39; + echarts.format.formatTime(params.value);\n}\n</code></pre>\n"
  },
  "axisPointer.label.margin": {
    "desc": "<p>Distance between label and axis.</p>\n"
  },
  "axisPointer.label.color": {
    "desc": "\n\n<p> text color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "'#fff'"
    }
  },
  "axisPointer.label.fontStyle": {
    "desc": "\n\n<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "axisPointer.label.fontWeight": {
    "desc": "\n\n<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "axisPointer.label.fontFamily": {
    "desc": "\n\n<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "axisPointer.label.fontSize": {
    "desc": "\n\n<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "axisPointer.label.lineHeight": {
    "desc": "\n\n<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-ts\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "axisPointer.label.width": {
    "desc": "\n\n<p>Width of text block.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "axisPointer.label.height": {
    "desc": "\n\n<p>Height of text block.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "axisPointer.label.textBorderColor": {
    "desc": "\n\n<p>Storke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "axisPointer.label.textBorderWidth": {
    "desc": "\n\n<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisPointer.label.textBorderType": {
    "desc": "\n\n\n<p>Stroke line type of the text.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">textBorderDashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-ts\">{\n\ntextBorderType: [5, 10],\n\ntextBorderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "axisPointer.label.textBorderDashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">textBorderType</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "axisPointer.label.textShadowColor": {
    "desc": "\n\n<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "axisPointer.label.textShadowBlur": {
    "desc": "\n\n<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisPointer.label.textShadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "axisPointer.label.textShadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "axisPointer.label.overflow": {
    "desc": "\n\n<p>Determine how to display the text when it&#39;s overflow. Available when <code class=\"codespan\">width</code> is set.</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> Truncate the text and trailing with <code class=\"codespan\">ellipsis</code>.</li>\n<li><code class=\"codespan\">&#39;break&#39;</code> Break by word</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> Break by character.</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "axisPointer.label.ellipsis": {
    "desc": "<p>Ellipsis to be displayed when <code class=\"codespan\">overflow</code> is set to <code class=\"codespan\">truncate</code>.</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> Truncate the overflow lines.</li>\n</ul>\n"
  },
  "axisPointer.label.padding": {
    "desc": "\n\n<p>axisPointer space around content. The unit is px. Default values for each position are 5. And they can be set to different values with left, right, top, and bottom.</p>\n<p>Examples:</p>\n<pre><code class=\"lang-ts\">// Set padding to be 5\npadding: 5\n// Set the top and bottom paddings to be 5, and left and right paddings to be 10\npadding: [5, 10]\n// Set each of the four paddings seperately\npadding: [\n    5,  // up\n    10, // right\n    5,  // down\n    10, // left\n]\n</code></pre>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "axisPointer.label.backgroundColor": {
    "desc": "<p>Background color of label, the same as <a href=\"#xAxis.axisLine.lineStyle.color\">axis.axisLine.lineStyle.color</a> by default.</p>\n"
  },
  "axisPointer.label.borderColor": {
    "desc": "<p>Border color of label.</p>\n"
  },
  "axisPointer.label.borderWidth": {
    "desc": "<p>Border width of label.</p>\n"
  },
  "axisPointer.label.shadowBlur": {
    "desc": "\n\n<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "3",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisPointer.label.shadowColor": {
    "desc": "\n\n<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#aaa"
    }
  },
  "axisPointer.label.shadowOffsetX": {
    "desc": "\n\n<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "axisPointer.label.shadowOffsetY": {
    "desc": "\n\n<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "axisPointer.lineStyle": {
    "desc": "<p>It is valid when <a href=\"#tooltip.axisPointer.type\">axisPointer.type</a> is <code class=\"codespan\">&#39;line&#39;</code>.</p>\n"
  },
  "axisPointer.lineStyle.color": {
    "desc": "\n\n<p>Line color. </p>\n<blockquote>\n<p>Supports setting as solid color using <code class=\"codespan\">rgb(255,255,255)</code>, <code class=\"codespan\">rgba(255,255,255,1)</code>, <code class=\"codespan\">#fff</code>, etc. Also supports setting as gradient color and pattern fill, see <a href=\"#color\">option.color</a> for details</p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "axisPointer.lineStyle.width": {
    "desc": "\n\n<p> line width.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisPointer.lineStyle.type": {
    "desc": "\n\n\n<p>line type.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">dashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-ts\">{\n\ntype: [5, 10],\n\ndashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "axisPointer.lineStyle.dashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">type</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "axisPointer.lineStyle.cap": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To specify how to draw the end points of the line.\nPossible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: The ends of lines are squared off at the endpoints.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: The ends of lines are rounded.</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: The ends of lines are squared off by adding a box with an equal width and half the height of the line&#39;s thickness.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;butt&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "axisPointer.lineStyle.join": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To determine the shape used to join two line segments where they meet.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the \n<code class=\"codespan\">miterLimit</code>\nproperty.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;bevel&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "axisPointer.lineStyle.miterLimit": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the miter limit ratio. Only works when \n<code class=\"codespan\">join</code>\n is set as <code class=\"codespan\">miter</code>.</p>\n<p>Default value is <code class=\"codespan\">10</code>. Negative、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> and <code class=\"codespan\">NaN</code> values are ignored.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "axisPointer.lineStyle.shadowBlur": {
    "desc": "\n\n<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisPointer.lineStyle.shadowColor": {
    "desc": "\n\n<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "axisPointer.lineStyle.shadowOffsetX": {
    "desc": "\n\n<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "axisPointer.lineStyle.shadowOffsetY": {
    "desc": "\n\n<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "axisPointer.lineStyle.opacity": {
    "desc": "\n\n<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "axisPointer.shadowStyle": {
    "desc": "<p>It is valid when <a href=\"#tooltip.axisPointer.type\">axisPointer.type</a> is <code class=\"codespan\">&#39;shadow&#39;</code>.</p>\n"
  },
  "axisPointer.shadowStyle.color": {
    "desc": "\n\n<p>Fill color. </p>\n<blockquote>\n<p>Supports setting as solid color using <code class=\"codespan\">rgb(255,255,255)</code>, <code class=\"codespan\">rgba(255,255,255,1)</code>, <code class=\"codespan\">#fff</code>, etc. Also supports setting as gradient color and pattern fill, see <a href=\"#color\">option.color</a> for details</p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "axisPointer.shadowStyle.shadowBlur": {
    "desc": "\n\n<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisPointer.shadowStyle.shadowColor": {
    "desc": "\n\n<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "axisPointer.shadowStyle.shadowOffsetX": {
    "desc": "\n\n<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "axisPointer.shadowStyle.shadowOffsetY": {
    "desc": "\n\n<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "axisPointer.shadowStyle.opacity": {
    "desc": "\n\n<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "axisPointer.crossStyle": {
    "desc": "<p>It is valid when <a href=\"#tooltip.axisPointer.type\">axisPointer.type</a> is <code class=\"codespan\">&#39;cross&#39;</code>.</p>\n"
  },
  "axisPointer.crossStyle.color": {
    "desc": "\n\n<p>Line color. </p>\n<blockquote>\n<p>Supports setting as solid color using <code class=\"codespan\">rgb(255,255,255)</code>, <code class=\"codespan\">rgba(255,255,255,1)</code>, <code class=\"codespan\">#fff</code>, etc. Also supports setting as gradient color and pattern fill, see <a href=\"#color\">option.color</a> for details</p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "axisPointer.crossStyle.width": {
    "desc": "\n\n<p> line width.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisPointer.crossStyle.type": {
    "desc": "\n\n\n<p>line type.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">dashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-ts\">{\n\ntype: [5, 10],\n\ndashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "axisPointer.crossStyle.dashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">type</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "axisPointer.crossStyle.cap": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To specify how to draw the end points of the line.\nPossible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: The ends of lines are squared off at the endpoints.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: The ends of lines are rounded.</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: The ends of lines are squared off by adding a box with an equal width and half the height of the line&#39;s thickness.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;butt&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "axisPointer.crossStyle.join": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To determine the shape used to join two line segments where they meet.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the \n<code class=\"codespan\">miterLimit</code>\nproperty.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;bevel&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "axisPointer.crossStyle.miterLimit": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the miter limit ratio. Only works when \n<code class=\"codespan\">join</code>\n is set as <code class=\"codespan\">miter</code>.</p>\n<p>Default value is <code class=\"codespan\">10</code>. Negative、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> and <code class=\"codespan\">NaN</code> values are ignored.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "axisPointer.crossStyle.shadowBlur": {
    "desc": "\n\n<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisPointer.crossStyle.shadowColor": {
    "desc": "\n\n<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "axisPointer.crossStyle.shadowOffsetX": {
    "desc": "\n\n<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "axisPointer.crossStyle.shadowOffsetY": {
    "desc": "\n\n<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "axisPointer.crossStyle.opacity": {
    "desc": "\n\n<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "axisPointer.animation": {
    "desc": "\n\n<p>Whether to enable animation.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true",
      "clean": "true"
    }
  },
  "axisPointer.animationThreshold": {
    "desc": "<p>Whether to set graphic number threshold to animation. Animation will be disabled when graphic number is larger than threshold.</p>\n"
  },
  "axisPointer.animationDuration": {
    "desc": "\n\n<p>Duration of the first animation, which supports callback function for different data to have different animation effect:</p>\n<pre><code class=\"lang-ts\">animationDuration: function (idx) {\n    // delay for later data is larger\n    return idx * 100;\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "1000",
      "step": "20",
      "clean": "true"
    }
  },
  "axisPointer.animationEasing": {
    "desc": "\n\n<p>Easing method used for the first animation. Varied easing effects can be found at <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">easing effect example</a>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut",
      "clean": "true"
    }
  },
  "axisPointer.animationDelay": {
    "desc": "<p>Delay before updating the first animation, which supports callback function for different data to have different animation effect.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">animationDelay: function (idx) {\n    // delay for later data is larger\n    return idx * 100;\n}\n</code></pre>\n<p>See <a href=\"https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay\" target=\"_blank\">this example</a> for more information.</p>\n"
  },
  "axisPointer.animationDurationUpdate": {
    "desc": "\n\n<p>Time for animation to complete, which supports callback function for different data to have different animation effect:</p>\n<pre><code class=\"lang-ts\">animationDurationUpdate: function (idx) {\n    // delay for later data is larger\n    return idx * 100;\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "1000",
      "step": "20"
    }
  },
  "axisPointer.animationEasingUpdate": {
    "desc": "\n\n<p>Easing method used for animation.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut"
    }
  },
  "axisPointer.animationDelayUpdate": {
    "desc": "<p>Delay before updating animation, which supports callback function for different data to have different animation effects.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">animationDelayUpdate: function (idx) {\n    // delay for later data is larger\n    return idx * 100;\n}\n</code></pre>\n<p>See <a href=\"https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay\" target=\"_blank\">this example</a> for more information.</p>\n"
  },
  "showContent": {
    "desc": "\n\n<p>Whether to show the tooltip floating layer, whose default value is true. It should be configurated to be <code class=\"codespan\">false</code>, if you only need tooltip to trigger the event or show the axisPointer without content.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "alwaysShowContent": {
    "desc": "\n\n<p>Whether to show tooltip content all the time. By default, it will be hidden <a href=\"#tooltip.hideDelay\">after some time</a>. It can be set to be <code class=\"codespan\">true</code> to preserve displaying.</p>\n<p>This attribute is newly added to ECharts 3.0.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "triggerOn": {
    "desc": "\n\n<p>Conditions to trigger tooltip. Options:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;mousemove&#39;</code></p>\n<p>  Trigger when mouse moves.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;click&#39;</code></p>\n<p>  Trigger when mouse clicks.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;mousemove|click&#39;</code></p>\n<p>  Trigger when mouse clicks and moves.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;none&#39;</code></p>\n<p>  Do not triggered by <code class=\"codespan\">&#39;mousemove&#39;</code> and <code class=\"codespan\">&#39;click&#39;</code>. Tooltip can be triggered and hidden manually by calling <a href=\"api.html#action.tooltip.showTip\" target=\"_blank\">action.tooltip.showTip</a> and <a href=\"api.html#action.tooltip.hideTip\" target=\"_blank\">action.tooltip.hideTip</a>. It can also be triggered by <a href=\"#xAxis.axisPointer.handle\">axisPointer.handle</a> in this case.</p>\n</li>\n</ul>\n<p>This attribute is new to ECharts 3.0.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "mousemove,click"
    }
  },
  "showDelay": {
    "desc": "\n\n<p>Delay time for showing tooltip, in ms. No delay by default, and it is not recommended to set. Only valid when <a href=\"#tooltip.triggerOn\">triggerOn</a> is set to be <code class=\"codespan\">&#39;mousemove&#39;</code>.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "20"
    }
  },
  "hideDelay": {
    "desc": "\n\n<p>Delay time for hiding tooltip, in ms. It will be invalid when <a href=\"#tooltip.alwaysShowContent\">alwaysShowContent</a> is <code class=\"codespan\">true</code>.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "20",
      "default": "100"
    }
  },
  "enterable": {
    "desc": "\n\n<p>Whether mouse is allowed to enter the floating layer of tooltip, whose default value is false. If you need to interact in the tooltip like with links or buttons, it can be set as <code class=\"codespan\">true</code>.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "renderMode": {
    "desc": "\n\n<p>Render mode for tooltip. By default, it is set to be <code class=\"codespan\">&#39;html&#39;</code> so that extra DOM element is used for tooltip. It can also set to be <code class=\"codespan\">&#39;richText&#39;</code> so that the tooltip will be rendered inside Canvas (SVG rich text is not implemented yet). This is very useful for environments that don&#39;t have DOM, such as Wechat applications.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "html,richText",
      "default": "html"
    }
  },
  "confine": {
    "desc": "\n\n<p>Whether confine tooltip content in the view rect of chart instance.</p>\n<p>Useful when tooltip is cut because of <code class=\"codespan\">&#39;overflow: hidden&#39;</code> set on outer dom of chart instance, or because of narrow screen on mobile.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "appendToBody": {
    "desc": "\n\n\n\n<blockquote>\n<p>Since <code class=\"codespan\">v4.7.0</code></p>\n</blockquote>\n<p>Whether to append the tooltip DOM element as a child of the <code class=\"codespan\">&lt;body&gt;</code> of the HTML page, when using <a href=\"#tooltip.renderMode\">renderMode</a> <code class=\"codespan\">&#39;html&#39;</code>.</p>\n<p>By default <code class=\"codespan\">false</code>, means that the tooltip DOM element will be one of a descendant of its echarts DOM container. But that means that the tooltip might be cut when overflow the container if some of the ancestors DOM element of the echarts container are styled with <code class=\"codespan\">overflow: hidden</code>. This case could also be resolved by setting <a href=\"#tooltip.confine\">tooltip.confine</a>, but it might not suitable for all scenarios.</p>\n<p>Here we provide <code class=\"codespan\">appendToBody: true</code> to auto append the tooltip element to <code class=\"codespan\">&lt;body&gt;</code>, which is a common way to resolve this kind of issue. But <code class=\"codespan\">true</code> is not set as a default value because to void to bring break change for some cases where tooltip is deeply customized and to void some unexpected bad cases.</p>\n<p>Note that it also works when CSS transform used.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "className": {
    "desc": "\n\n\n\n<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>Specify the classes for the tooltip root DOM. (Only works in <a href=\"#tooltip.renderMode\"><code class=\"codespan\">html</code></a> render mode).</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">className: &#39;echarts-tooltip echarts-tooltip-dark&#39;\n</code></pre>\n",
    "uiControl": {
      "type": "text"
    }
  },
  "transitionDuration": {
    "desc": "\n\n<p>The transition duration of tooltip&#39;s animation, in seconds. When it is set to be 0, it would move closely with the mouse.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.1",
      "default": "0.4"
    }
  },
  "position": {
    "desc": "<p>The position of the tooltip&#39;s floating layer, which would follow the position of mouse by default.</p>\n<p>Options:</p>\n<ul>\n<li><p><code class=\"codespan\">Array</code></p>\n<p>  Display the position of tooltip&#39;s floating layer through array, which supports absolute position and relative percentage.</p>\n<p>  Example:</p>\n<pre><code class=\"lang-ts\">  // absolute position, which is 10px to the left side and 10px to the top side of the container\n  position: [10, 10]\n  // relative position, in the exact center of the container\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n<li><p><code class=\"codespan\">Function</code></p>\n<p>  Callback function in the following form:</p>\n<pre><code class=\"lang-ts\">  (point: Array, params: Object|Array.&lt;Object&gt;, dom: HTMLDomElement, rect: Object, size: Object) =&gt; Array\n</code></pre>\n<p>  <strong>Parameters:</strong><br>\n  point: Mouse position.<br>\n  param: The same as formatter.<br>\n  dom: The DOM object of tooltip.<br>\n  rect: It is valid only when mouse is on graphic elements, which stands for a bounding box with <code class=\"codespan\">x</code>, <code class=\"codespan\">y</code>, <code class=\"codespan\">width</code>, and <code class=\"codespan\">height</code>.<br>\n  size: The size of dom echarts container. For example: <code class=\"codespan\">{contentSize: [width, height], viewSize: [width, height]}</code>. <br></p>\n<p>  <strong>Return:</strong><br>\n  Return value is an array standing for tooltip position, which can be absolute pixels, or relative percentage.<br>\n  Or can be an object, like <code class=\"codespan\">{left: 10, top: 30}</code>, or <code class=\"codespan\">{right: &#39;20%&#39;, bottom: 40}</code>.<br></p>\n<p>  For example:</p>\n<pre><code class=\"lang-ts\">  position: function (point, params, dom, rect, size) {\n      // fixed at top\n      return [point[0], &#39;10%&#39;];\n  }\n</code></pre>\n<p>  Or:</p>\n<pre><code class=\"lang-ts\">  position: function (pos, params, dom, rect, size) {\n      // tooltip will be fixed on the right if mouse hovering on the left,\n      // and on the left if hovering on the right.\n      var obj = {top: 60};\n      obj[[&#39;left&#39;, &#39;right&#39;][+(pos[0] &lt; size.viewSize[0] / 2)]] = 5;\n      return obj;\n  }\n</code></pre>\n</li>\n<li><p><code class=\"codespan\">&#39;inside&#39;</code></p>\n<p> Center position of the graphic element where the mouse is in, which is only valid when <a href=\"#tooltip.trigger\">trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;top&#39;</code></p>\n<p>  Top position of the graphic element where the mouse is in, which is only valid when <a href=\"#tooltip.trigger\">trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;left&#39;</code></p>\n<p>  Left position of the graphic element where the mouse is in, which is only valid when <a href=\"#tooltip.trigger\">trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;right&#39;</code></p>\n<p>  Right position of the graphic element where the mouse is in, which is only valid when <a href=\"#tooltip.trigger\">trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;bottom&#39;</code></p>\n<p>  Bottom position of the graphic element where the mouse is in, which is only valid when <a href=\"#tooltip.trigger\">trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.</p>\n</li>\n</ul>\n"
  },
  "formatter": {
    "desc": "<p>The content formatter of tooltip&#39;s floating layer which supports string template and callback function.</p>\n<p><strong>1. String template</strong></p>\n<p>The template variables are <code class=\"codespan\">{a}</code>, <code class=\"codespan\">{b}</code>, <code class=\"codespan\">{c}</code>, <code class=\"codespan\">{d}</code> and <code class=\"codespan\">{e}</code>, which stands for series name, data name and data value and ect. When <a href=\"#tooltip.trigger\">trigger</a> is set to be <code class=\"codespan\">&#39;axis&#39;</code>, there may be data from multiple series. In this time, series index can be refered as <code class=\"codespan\">{a0}</code>, <code class=\"codespan\">{a1}</code>, or <code class=\"codespan\">{a2}</code>.</p>\n<p><code class=\"codespan\">{a}</code>, <code class=\"codespan\">{b}</code>, <code class=\"codespan\">{c}</code>, <code class=\"codespan\">{d}</code> have different meanings for different series types:</p>\n<ul>\n<li><p>Line (area) charts, bar (column) charts, K charts: <code class=\"codespan\">{a}</code> for series name, <code class=\"codespan\">{b}</code> for category name, <code class=\"codespan\">{c}</code> for data value, <code class=\"codespan\">{d}</code> for none;</p>\n</li>\n<li><p>Scatter (bubble) charts: <code class=\"codespan\">{a}</code> for series name, <code class=\"codespan\">{b}</code> for data name, <code class=\"codespan\">{c}</code> for data value, <code class=\"codespan\">{d}</code> for none;</p>\n</li>\n<li><p>Map: <code class=\"codespan\">{a}</code> for series name, <code class=\"codespan\">{b}</code> for area name, <code class=\"codespan\">{c}</code> for merging data, <code class=\"codespan\">{d}</code> for none;</p>\n</li>\n<li><p>Pie charts, gauge charts, funnel charts: <code class=\"codespan\">{a}</code> for series name, <code class=\"codespan\">{b}</code> for data item name, <code class=\"codespan\">{c}</code> for data value, <code class=\"codespan\">{d}</code> for percentage.</p>\n</li>\n</ul>\n<p><strong>Example: </strong></p>\n<pre><code class=\"lang-ts\">formatter: &#39;{b0}: {c0}&lt;br /&gt;{b1}: {c1}&#39;\n</code></pre>\n<p><strong>2. Callback function</strong></p>\n<p>The format of callback function:</p>\n<pre><code class=\"lang-ts\">(params: Object|Array, ticket: string, callback: (ticket: string, html: string)) =&gt; string | HTMLElement | HTMLElement[]\n</code></pre>\n<p>The first parameter <code class=\"codespan\">params</code> is the data that the formatter needs. Its format is shown as follows:</p>\n<pre><code class=\"lang-ts\">{\n    componentType: &#39;series&#39;,\n    // Series type\n    seriesType: string,\n    // Series index in option.series\n    seriesIndex: number,\n    // Series name\n    seriesName: string,\n    // Data name, or category name\n    name: string,\n    // Data index in input data array\n    dataIndex: number,\n    // Original data as input\n    data: Object,\n    // Value of data. In most series it is the same as data.\n    // But in some series it is some part of the data (e.g., in map, radar)\n    value: number|Array|Object,\n    // encoding info of coordinate system\n    // Key: coord, like (&#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39;)\n    // value: Must be an array, not null/undefined. Contain dimension indices, like:\n    // {\n    //     x: [2] // values on dimension index 2 are mapped to x axis.\n    //     y: [0] // values on dimension index 0 are mapped to y axis.\n    // }\n    encode: Object,\n    // dimension names list\n    dimensionNames: Array&lt;String&gt;,\n    // data dimension index, for example 0 or 1 or 2 ...\n    // Only work in `radar` series.\n    dimensionIndex: number,\n    // Color of data\n    color: string,\n\n\n\n\n\nWhen [trigger](~tooltip.trigger) is `&#39;axis&#39;`, or when tooltip is triggered by [axisPointer](~xAxis.axisPointer), `params` is the data array of multiple series. The content of each item of the array is the same as above. Besides,\n\n\n\n```ts\n{\n    componentType: &#39;series&#39;,\n    // Series type\n    seriesType: string,\n    // Series index in option.series\n    seriesIndex: number,\n    // Series name\n    seriesName: string,\n    // Data name, or category name\n    name: string,\n    // Data index in input data array\n    dataIndex: number,\n    // Original data as input\n    data: Object,\n    // Value of data. In most series it is the same as data.\n    // But in some series it is some part of the data (e.g., in map, radar)\n    value: number|Array|Object,\n    // encoding info of coordinate system\n    // Key: coord, like (&#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39;)\n    // value: Must be an array, not null/undefined. Contain dimension indices, like:\n    // {\n    //     x: [2] // values on dimension index 2 are mapped to x axis.\n    //     y: [0] // values on dimension index 0 are mapped to y axis.\n    // }\n    encode: Object,\n    // dimension names list\n    dimensionNames: Array&lt;String&gt;,\n    // data dimension index, for example 0 or 1 or 2 ...\n    // Only work in `radar` series.\n    dimensionIndex: number,\n    // Color of data\n    color: string,\n\n\n\n\n\n**Note: **Using array to present all the parameters in ECharts 2.x is not supported anymore.\n\nThe second parameter `ticket` is the asynchronous callback flag which should be used along with the third parameter `callback` when it is used.\n\nThe third parameter `callback` is asynchronous callback. When the content of tooltip is acquired asynchronously, `ticket` and `htm` as introduced above can be used to update tooltip with callback.\n\nExample:\n```ts\nformatter: function (params, ticket, callback) {\n    $.get(&#39;detail?name=&#39; + params.name, function (content) {\n        callback(ticket, toHTML(content));\n    });\n    return &#39;Loading&#39;;\n}\n</code></pre>\n"
  },
  "valueFormatter": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.3.0</code></p>\n</blockquote>\n<p>Callback function for formatting the value section in tooltip.</p>\n<p>Interface:</p>\n<pre><code class=\"lang-ts\">(value: number | string) =&gt; string\n</code></pre>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">// Add $ prefix\nvalueFormatter: (value) =&gt; &#39;$&#39; + value.toFixed(2)\n</code></pre>\n"
  },
  "backgroundColor": {
    "desc": "<p>The background color of tooltip&#39;s floating layer.</p>\n"
  },
  "borderColor": {
    "desc": "\n\n\n\n\n\n\n\n\n\n<p>The border color of tooltip&#39;s floating layer.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#333"
    }
  },
  "borderWidth": {
    "desc": "\n\n\n\n\n\n\n\n\n\n<p>The border width of tooltip&#39;s floating layer.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "padding": {
    "desc": "\n\n\n\n\n\n\n\n\n\n\n\n\n\n<p>The floating layer of tooltip space around content. The unit is px. Default values for each position are 5. And they can be set to different values with left, right, top, and bottom.</p>\n<p>Examples:</p>\n<pre><code class=\"lang-ts\">// Set padding to be 5\npadding: 5\n// Set the top and bottom paddings to be 5, and left and right paddings to be 10\npadding: [5, 10]\n// Set each of the four paddings seperately\npadding: [\n    5,  // up\n    10, // right\n    5,  // down\n    10, // left\n]\n</code></pre>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "textStyle": {
    "desc": "<p>The text syle of tooltip&#39;s floating layer.</p>\n"
  },
  "textStyle.color": {
    "desc": "\n\n<p> text color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "'#fff'"
    }
  },
  "textStyle.fontStyle": {
    "desc": "\n\n<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "textStyle.fontWeight": {
    "desc": "\n\n<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "textStyle.fontFamily": {
    "desc": "\n\n<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "textStyle.fontSize": {
    "desc": "\n\n<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "14",
      "min": "1",
      "step": "1"
    }
  },
  "textStyle.lineHeight": {
    "desc": "\n\n<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-ts\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "textStyle.width": {
    "desc": "\n\n<p>Width of text block.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "textStyle.height": {
    "desc": "\n\n<p>Height of text block.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "textStyle.textBorderColor": {
    "desc": "\n\n<p>Storke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "textStyle.textBorderWidth": {
    "desc": "\n\n<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "textStyle.textBorderType": {
    "desc": "\n\n\n<p>Stroke line type of the text.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">textBorderDashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-ts\">{\n\ntextBorderType: [5, 10],\n\ntextBorderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "textStyle.textBorderDashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">textBorderType</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "textStyle.textShadowColor": {
    "desc": "\n\n<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "textStyle.textShadowBlur": {
    "desc": "\n\n<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "textStyle.textShadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "textStyle.textShadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "textStyle.overflow": {
    "desc": "\n\n<p>Determine how to display the text when it&#39;s overflow. Available when <code class=\"codespan\">width</code> is set.</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> Truncate the text and trailing with <code class=\"codespan\">ellipsis</code>.</li>\n<li><code class=\"codespan\">&#39;break&#39;</code> Break by word</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> Break by character.</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "textStyle.ellipsis": {
    "desc": "<p>Ellipsis to be displayed when <code class=\"codespan\">overflow</code> is set to <code class=\"codespan\">truncate</code>.</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> Truncate the overflow lines.</li>\n</ul>\n"
  },
  "extraCssText": {
    "desc": "\n\n\n\n\n\n\n\n\n\n<p>Extra CSS style for floating layer. The following is an example for adding shadow.</p>\n<pre><code class=\"lang-ts\">extraCssText: &#39;box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);&#39;\n</code></pre>\n",
    "uiControl": {
      "type": "text"
    }
  },
  "order": {
    "desc": "\n\n\n\n<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>Tooltip order for multiple series. Defaults is <code class=\"codespan\">&#39;seriesAsc&#39;</code>.</p>\n<p>Conditions to order tooltip. Options:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;seriesAsc&#39;</code></p>\n<p>  Base on series declaration, ascending order tooltip.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;seriesDesc&#39;</code></p>\n<p>  Base on series declaration, descending order tooltip.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;valueAsc&#39;</code></p>\n<p>  Base on value, ascending order tooltip, only for numberic value.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;valueDesc&#39;</code></p>\n<p>  Base on value, descending order tooltip, only for numberic value.</p>\n</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "seriesAsc,seriesDesc,valueAsc,valueDesc",
      "default": "seriesAsc"
    }
  }
}