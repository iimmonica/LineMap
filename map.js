

function drawShandongMap() {
var m = {maxc:93472600, minl:0, minsd:0, minc:12500, maxsd:94359100, maxl:34163600};
	var chart = echarts.init(document.getElementById('mainchart'));
	
		var option = {
			animation : true,
			calculable : false,
			tooltip : {
				trigger : 'item',
				formatter: '{b}<br />{a}<br />数据量：{c}'
			},
			legend : {
				orient : 'vertical',
				x : 'right',
				y : 'center',
				selectedMode : 'single',
				data : [ '山东省','济南市', '威海市', '烟台市', '青岛市', '潍坊市', '日照市', '临沂市', '淄博市', '东营市',
						'滨州市', '德州市', '聊城市', '泰安市', '莱芜市', '济宁市', '菏泽市', '枣庄市' ],
				selected : {
					'山东省' : false,
					'济南市' : true,
					'威海市' : false,
					'烟台市' : false,
					'青岛市' : false,
					'潍坊市' : false,
					'日照市' : false,
					'临沂市' : false,
					'枣庄市' : false,
					'济宁市' : false,
					'泰安市' : false,
					'菏泽市' : false,
					'聊城市' : false,
					'德州市' : false,
					'滨州市' : false,
					'东营市' : false,
					'淄博市' : false,
					'莱芜市' : false
				},
				textStyle : {
					color : '#CCC'
				}
			},
			geo: {
	            map: 'china',
	            left: '8%',
				right: '50%',
				top: '8%',
				bottom: '8%',
	            silent: true,
	            itemStyle: {
	                normal: {
	                    borderColor: 'rgba(0,0,0,0)',
	                    color: 'rgba(0,0,0,0)'
	                }
	            }
	        },
			visualMap : [{
				show: true,
				type: 'continuous',
				min : m.minl,
				max : m.maxl,
				precision : 0,
				left: '120px',
				text : [ '高', '低' ],
				calculable : true,
				textStyle : {
					color : '#CCC'
				},
				inRange: {
		            color: ['#FFF258','#ff3333']
		        }
			},{
				show: true,
				type: 'continuous',
				min : m.minc,
				max : m.maxc,
				seriesIndex: 0,
				precision : 0,
				left: '10px',
				text : [ '高', '低' ],
				calculable : true,
				textStyle : {
					color : '#CCC'
				},
				inRange: {
		            color: ['#81BC2C', '#FF8600']
		        }
			},{
				show: true,
				type: 'continuous',
				min : m.minsd,
				max : m.maxsd,
				seriesIndex: 1,
				precision : 0,
				right: '150px',
				text : [ '高', '低' ],
				calculable : true,
				textStyle : {
					color : '#CCC'
				},
				inRange: {
		            color: ['#1762D1', '#5DC9FF']
		        }
			}],
			series : [ {
				name : '来源地区',
				type : 'map',
				map : 'china',
				left: '8%',
				right: '50%',
				top: '8%',
				bottom: '8%',
				selectedMode : 'single',
				label:{
					normal:{
						show: true,
						textStyle:{
							color: '#fff'
						}
					},
					emphasis:{
						textStyle:{
							color: '#fff'
						}
					}
				},
				itemStyle : {
					normal : {
						color: 'rgba(0,0,0,0)',
						areaColor : '#8993A2',
						borderColor : '#CEE5AA',
						borderWidth : 0.5
					},
					emphasis : {
						color: 'rgba(0,0,0,0)',
						areaColor : 'rgba(108,167,26,0.9)',
						borderColor : '#CEE5AA'
					}
				},
				data : []
			}, {
				name : '目的地区',
				type : 'map',
				map : '山东',
				left: '50%',
				right: '8%',
				top: '10%',
				bottom: '10%',
				selectedMode : 'single',
				label:{
					normal:{
						show: true,
						textStyle:{
							color: '#fff'
						}
					},
					emphasis:{
						textStyle:{
							color: '#fff'
						}
					}
				},
				itemStyle : {
					normal : {
						color: 'rgba(0,0,0,0)',
						areaColor: '#8993A2',
						borderColor : 'rgba(100,149,237,1)',
						borderWidth : 0.5
					},
					emphasis : {
						color: 'rgba(0,0,0,0)',
						areaColor:'rgba(31,95,188,0.9)',
						borderColor : 'rgba(100,149,237,1)'
					}
				},
				data : []
			}
			]
		};
		option.series[0].data = cMapList;
		option.series[1].data = sdMapList;
		for(var i = 0; i < lineList.length; i++){
			option.series.push(lineList[i]);
		}
	chart.setOption(option);
	//解决全选时动画残留问题
	chart.on('legendselectchanged', function (params) {
	    console.log(params);
	    if(params.name == "山东省"){
	    	  option.legend.selected = {
	  		    	'山东省' : false,
	  				'济南市' : false,
	  				'威海市' : false,
	  				'烟台市' : false,
	  				'青岛市' : false,
	  				'潍坊市' : false,
	  				'日照市' : false,
	  				'临沂市' : false,
	  				'枣庄市' : false,
	  				'济宁市' : false,
	  				'泰安市' : false,
	  				'菏泽市' : false,
	  				'聊城市' : false,
	  				'德州市' : true,
	  				'滨州市' : false,
	  				'东营市' : false,
	  				'淄博市' : false,
	  				'莱芜市' : false
	  		};
	    	chart.setOption(option);
		    option.legend.selected = {
		    	'山东省' : true,
				'济南市' : false,
				'威海市' : false,
				'烟台市' : false,
				'青岛市' : false,
				'潍坊市' : false,
				'日照市' : false,
				'临沂市' : false,
				'枣庄市' : false,
				'济宁市' : false,
				'泰安市' : false,
				'菏泽市' : false,
				'聊城市' : false,
				'德州市' : false,
				'滨州市' : false,
				'东营市' : false,
				'淄博市' : false,
				'莱芜市' : false
			};
		    chart.setOption(option);
	    
	    }
	});
}