$(".hh").blur(function () {
            if ($(this).val() >= 24)
                $(this).val($(this).val() % 24);

            if ($(this).val() == "")
                $(this).val("");
            else
                if ($(this).val() < 10)
                    $(this).val("0" + parseInt($(this).val()));
			validateTime(x);
        });
        $(".mm").blur(function () {
            if ($(this).val() >= 60)
                $(this).val($(this).val() % 60);

            if ($(this).val() == "")
                $(this).val("");
            else
                if ($(this).val() < 10)
                    $(this).val("0" + parseInt($(this).val()));

            var x = $(this).parent().attr("class").split(" ")[1];
            validateTime(x);
        });

        $(".hh").on("input", function () {
            $(this).parent().removeClass("invalid").removeClass("valid");
            if ($(this).val().length == 2)
                $(this).siblings(".mm").focus().select();
        });
        $(".mm").on("input", function () {
            $(this).parent().removeClass("invalid").removeClass("valid");
            if ($(this).val().length == 2)
                $(this).blur();
        });
		$(".hh").on("focus", function () {
            $(this).parent().removeClass("invalid").removeClass("valid");
        });
		$(".mm").on("focus", function () {
            $(this).parent().removeClass("invalid").removeClass("valid");
        });

        function getTime(x) {
            var t = $(".timepicker." + x).find(".hh").val() + ":" + $(".timepicker." + x).find(".mm").val();
			var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(t);
			var res = t ;
            if (!isValid)
                res = null;
            return res;
        }

        function validateTime(x) {
			var t = $(".timepicker." + x).find(".hh").val() + ":" + $(".timepicker." + x).find(".mm").val();
            var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(t);
            if (isValid) {
                $(".timepicker." + x).removeClass("invalid").addClass("valid");
            } else {
                $(".timepicker." + x).removeClass("valid").addClass("invalid");
            }

        }

        function setTime(x, t) {
            $(".timepicker." + x).children(".hh").val(t.substring(0, 2));
            $(".timepicker." + x).children(".mm").val(t.substring(3, 5));
            validateTime(x);
        }
		
		$(".btnGetTime").click(function(){
			alert(getTime("timepicker1"));
		});
		
		$(".btnSetTime").click(function(){
			setTime("timepicker1" , "10:35");
		});
		
		$("html").on('input' , ".N" , function () {
			$(this).val($(this).val().replace(/[^0-9.]/g, ""));
		});