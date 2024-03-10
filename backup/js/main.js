$(function(){
    
    $('.load-more').on('click', function(){
        const btn = $(this);
        const loader = btn.find('span');
        
        $.ajax({
            url: '../data.html',
            type: 'GET',
            beforeSend: function(){
                btn.attr('disabled', true);
                loader.addClass('d-inline-block');
            },
            success: function(responce){
                btn.attr('disabled', false);
                loader.removeClass('d-inline-block');
                console.log(responce);
            },
            error: function(){
                alert('Error');
                btn.attr('disabled', false);
                loader.removeClass('d-inline-block');
            }
            
        });
        
    });
    
});