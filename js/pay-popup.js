$(document).ready(function() {
        $(".btn-download").click(function() {
            var currentid = this.id;
            var refAppIconSrc = $(this).siblings(".app-icon-wrapper").attr("icon-src");
            var refAppName = $(this).siblings(".app-name").attr("name");
            var refAppPrice = $(this).attr("price");
            if (refAppPrice == "0") {
                refAppPrice = "Free";
            };
            var refAppSubtitle = $(this).siblings(".subtitle").attr("subtitle");
            
            $(".pay-popup-name").text("" + refAppName);
            $(".pay-popup-subtitle").text("" + refAppSubtitle);
            $(".pay-popup-app-icon").html('<img class="app-icon" src="' + refAppIconSrc + '">');
            $(".pay-popup-price").text("" + refAppPrice);
            $(".pay-now").css("visibility", "visible");
            $(".pay-now").css("bottom", "1em");
        });
        });
        $( function() {
        $(".cancel").click(function() {
            $(".pay-now").css("bottom", "-100%");
            $(".pay-now").css("visibility", "hidden");
        });
});