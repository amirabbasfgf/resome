!function($){function formatter(value,settings){return value.toFixed(settings.decimals)}$.fn.countTo=function(options){return options=options||{},$(this).each((function(){var settings=$.extend({},$.fn.countTo.defaults,{from:$(this).data("from"),to:$(this).data("to"),speed:$(this).data("speed"),refreshInterval:$(this).data("refresh-interval"),decimals:$(this).data("decimals")},options),loops=Math.ceil(settings.speed/settings.refreshInterval),increment=(settings.to-settings.from)/loops,self=this,$self=$(this),loopCount=0,value=settings.from,data=$self.data("countTo")||{};function updateTimer(){loopCount++,render(value+=increment),"function"==typeof settings.onUpdate&&settings.onUpdate.call(self,value),loopCount>=loops&&($self.removeData("countTo"),clearInterval(data.interval),value=settings.to,"function"==typeof settings.onComplete&&settings.onComplete.call(self,value))}function render(value){var formattedValue=settings.formatter.call(self,value,settings);$self.html(formattedValue)}$self.data("countTo",data),data.interval&&clearInterval(data.interval),data.interval=setInterval(updateTimer,settings.refreshInterval),render(value)}))},$.fn.countTo.defaults={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:formatter,onUpdate:null,onComplete:null}}(jQuery);