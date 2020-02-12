$(document).ready(function(){
    $("#mask_slash").change(function(){
                var pinili = $(this).prop('selectedIndex');
                $("#mask_ip").prop('selectedIndex', pinili);
                $("#number_of_hosts").prop('selectedIndex', pinili);
        });
});

$(document).ready(function(){
    $("#mask_ip").change(function(){
                var ip = $(this).prop('selectedIndex');
                $("#mask_slash").prop('selectedIndex', ip);
                $("#number_of_hosts").prop('selectedIndex', ip);
        });
});

$(document).ready(function(){
    $("#number_of_hosts").change(function(){
                var host = $(this).prop('selectedIndex');
                $("#mask_ip").prop('selectedIndex', host);
                $("#mask_slash").prop('selectedIndex', host);
        });
});