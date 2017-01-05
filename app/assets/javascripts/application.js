// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree .

$(document).ready(function(){
    $("#kind-combobox").on("change", function(){
        selected = $(this).val();
        if (selected=="combobox") {
            $("#option-wrapper").show();
            $("#text-option-1").removeAttr("disabled", "disabled");
        } else {
            $("#more-options-wrapper").html("");
            $("#option-wrapper").hide();
            $("#text-option-1").attr("disabled", "disabled");
        }
    });


    var i_id = 1;
    $(document).on('click', '.add-option', function(){
       console.log("teste")
       last_field_id = 'option-' + i_id;
       last_field = "#"+last_field_id;
       var new_input = $(last_field).clone();

       field_id = 'option-' + ++i_id;
       field = "#"+field_id;

       new_input.attr("id", field_id);
       removeButton = "<button type=\"button\" class=\"button alert postfix\" id=\"rm-option\">-</button>"

       $(last_field).find("#option-button").html(removeButton);

       $(".option-container #more-options-wrapper").append(new_input);
       $("#"+field_id).find('label').attr('for', 'text-'+field_id);
       $("#"+field_id).find('input').attr('id', 'text-'+field_id);
       $("#"+field_id).find('input').val("");
       $("#"+field_id).find('label').text("Opção"+i_id);
    });

});

$(function(){ $(document).foundation(); });
