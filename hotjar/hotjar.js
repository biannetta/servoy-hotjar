angular.module('hotjarservicesHotjar',['servoy']).factory("hotjarservicesHotjar",function($services) {
	var scope = $services.getServiceScope('hotjarservicesHotjar');
	return {
		init: function(hotjarID) {
			(function(id,h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:id,hjsv:5};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(hotjarID,window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
		}
	}
})
.run(function($rootScope,$services) {
	var scope = $services.getServiceScope('hotjarservicesHotjar')
})