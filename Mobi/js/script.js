let masCart4=['&#9800;','&#9801;','&#9802;','&#9803;','&#9800;','&#9801;','&#9802;','&#9803;']
let masCart6=['&#9800;','&#9801;','&#9802;','&#9803;','&#9804;','&#9805;','&#9800;','&#9801;','&#9802;','&#9803;','&#9804;','&#9805;']
let masCart8=['&#9800;','&#9801;','&#9802;','&#9803;','&#9804;','&#9805;','&#9806;','&#9807;','&#9800;','&#9801;','&#9802;','&#9803;','&#9804;','&#9805;','&#9806;','&#9807;']
let masCart10=['&#9800;','&#9801;','&#9802;','&#9803;','&#9804;','&#9805;','&#9806;','&#9807;','&#9808;','&#9809;','&#9800;','&#9801;','&#9802;','&#9803;','&#9804;','&#9805;','&#9806;','&#9807;','&#9808;','&#9809;']
let masCart12=['&#9800;','&#9801;','&#9802;','&#9803;','&#9804;','&#9805;','&#9806;','&#9807;','&#9808;','&#9809;','&#9810;','&#9811;','&#9800;','&#9801;','&#9802;','&#9803;','&#9804;','&#9805;','&#9806;','&#9807;','&#9808;','&#9809;','&#9810;','&#9811;']
let checkPred = false, predVal, mozhno,verno=0
let win=0
  razdacha = function(m,s){
    
    win=m.length/2
    this.mas=[...m]
    $('#coloda').html('')
      lenMas=this.mas.length
      for (i=0;i<lenMas;i++){
           let ind = Math.floor(Math.random() * this.mas.length)
           $('#coloda').append($('<div>').addClass('cart').html(this.mas[ind]))
           this.mas.splice(ind,1);
        }
    tic(s)
    clic()
   
    }
  
   razdacha(masCart4,8)

  function tic(s){
    mozhno=false
    s--
    $('#start').text(s).css('backgroundColor','#faabab')
    setTimeout(()=> $('#start').css('backgroundColor','#fddac4'),500)
    if (s==0) {$('.cart').toggleClass('rubaska'); clearTimeout(otch);  $('#sec').text(''); $('#start').text('FINISH')
      mozhno=true}
      else otch = setTimeout(()=>tic(s),1000)
  }


 $('#start').on('click',(e)=>{  
   mozhno=true
   $('.cart').toggleClass('rubaska')
  clearTimeout(otch)
   $('#sec').text('')
   $('#start').text('FINISH')
 })


function clic(){
        
        $('.cart').click(function (){
        
        if (mozhno && !($(this).hasClass('block')) && ($(this).hasClass('rubaska'))){
            $(this).toggleClass('rubaska')
            if (!checkPred) { predVal=$(this); checkPred=true }
            else {
             
              if ($(this)==$(predVal)) console.log('!!!!!!');
        
                 if($(this).text()===predVal.text())
                 { 
                    predVal.animate({'opacity': '.2'},1000).addClass('block')
                    $(this).animate({ 'opacity': '.2' },1000).addClass('block')
                  verno++
                  if (verno==win) setTimeout(()=>{
                    $('#modal').fadeIn(500)
                    randCol= ()=>  Math.round(Math.random()*255)
                    setInterval(()=>{
                        modal.style.backgroundColor = `rgba(${randCol()},${randCol()},${randCol()},0.5)`
                    },1000)
                    $('#ok').click(()=>{
                        verno=0;
                        razdacha(eval($('#level').find('.activ').next().data('fn')),8)
                        $('#level').find('.activ').removeClass('activ').next().addClass('activ')
                        $('#modal').fadeOut(100)
                    })
                    $('#no').click(()=>$('#modal').fadeOut(100))
                  },800)
                 }
                else{ 
                    mozhno=false
                    setTimeout(()=>{
                      $(this).toggleClass('rubaska');
                      predVal.toggleClass('rubaska');
                      predVal='';
                      mozhno=true},1000)
                }
              checkPred=false
            }
          }
         }             
        )
}



 $('#level button:not("#help")').click(function(){
   $(this).closest('#level').find('.activ').removeClass('activ')
   $(this).addClass('activ')
   $('#start').text('START')
    clearTimeout(otch)
    razdacha(eval($(this).data('fn')),8)
 })    

   $('#help').click(function(){
      $('.cart').toggleClass('rubaska')
     mozhno=false
     setTimeout(()=> {$('.cart').toggleClass('rubaska');mozhno=true},2000)
   })           
     

//
//$('#animation').on('click',function(){
//    $('.box').animate({
//       
//      'width': '200px',  
//      'height': '100px',
//      'opacity': '.1'
//        
//    },1000)
//    
//     $('.box').animate({
//
//      'width': '600px',  
//      'height': '200px',  
//       'opacity':'1' 
//    },2000)
//    
//})
//$('#show').on('click',function(){
//    
//     $('.box').show(1000)
//})
//$('#hide').on('click',function(){
//      $('.box').hide(1000)
//    
//})
//  $('#fadeIn').on('click',function(){
//      $('.box').fadeIn(1000)
//    
//})
//$('#fadeOut').on('click',function(){
//      $('.box').fadeOut(1000)
//    
//})
//$('#fadeToggle').on('click',function(){
//      $('.box').fadeToggle(1000)
//    
//})
//$('#SlideUp').on('click',function(){
//      $('.box').slideUp(1000)
//    
//})
//$('#SlideDown').on('click',function(){
//      $('.box').slideDown(1000)
//    
//})
//$('#SlideToggle').on('click',function(){
//      $('.box').slideToggle(1000)
//    
//})
//masFrui = $('.fruit').get()  
//
//out = $('#info')
//$('#menu').on('mouseenter','li',(e)=>{
////    console.log(e.target)
////console.log($(e.target).data('text'))
//    $(masFrui[$(e.target).data('text')]).css('display','block')
//})
//    .on('mouseleave','li',(e)=>{
//$(masFrui[$(e.target).data('text')]).css('display','none')
//})

              
              