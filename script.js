let quotes = [{name:"Peter Drucker",
quote:"The best way to predict the future is to create it.",  }, {name:"Vince Lombardi", quote:"Winners never quit and quitters never win."},{name:"Bill Gates", quote:"It's fine to celebrate success but it is more important to heed the lessons of failure."
},{name:"Warren Buffet", quote:"It takes 20 years to build a reputation and five minutes to ruin it."
}, {
  name:"Steve Jobs", quote:"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking. Don’t let the noise of other’s opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary."
}, {
  name:"Jeff Bezos", quote:"One of the huge mistakes people make is that they try to force an interest on themselves. You don't choose your passions; your passions choose you."
}, {
  name:"Thomas Edison", quote:"I have not failed. I’ve just found 10,000 ways that won’t work."
}, {
  name:"Albert Einstein", quote:"Logic will get you from A to B. Imagination will take you everywhere."
}, {
  name:"Winston Churchill", quote:"Success is walking from failure to failure with no loss of enthusiasm."
}, {
  name:"Thomas Edison", quote:"Genius is 1% inspiration, and 99% perspiration."
}, {
  name:"Mark Twain", quote:"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover."
}, {
  name:"Vince Lombardi", quote:"The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand.”"
}, {
  name:"Napoleon Hill", quote:"If you cannot do great things, do small things in a great way."
}, {
  name:"Bo Bennet", quote:"Success is not what you have, but who you are."
}, {
  name:"Corneille", quote:"To win without risk is to triumph without glory."
}, {
  name:"Mark Twain", quote:"Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great."
}, {
  name:"Christoper Morley", quote:"There is only one success- to be able to spend your life in your own way."
}, {
  name:"Albert Schweitzer", quote:"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."
}, {
  name:"Malcolm Forbes", quote:"When you cease to dream you cease to live."
}, {
  name:"Jim Rohn", quote:"Formal education will make you a living; self-education will make you a fortune."
}];

let background = ["http://res.cloudinary.com/jcdiaz1991/image/upload/b_rgb:000000,o_60/v1517933413/cris4f_vvdy2c.jpg", "http://res.cloudinary.com/jcdiaz1991/image/upload/b_rgb:000000,o_60/v1517847670/2_eclma2.jpg", "http://res.cloudinary.com/jcdiaz1991/image/upload/b_rgb:000000,o_60/v1517847669/3_b4pvqk.jpg", "http://res.cloudinary.com/jcdiaz1991/image/upload/b_rgb:000000,o_60/v1517933417/cris10f_go30zs.jpg", "http://res.cloudinary.com/jcdiaz1991/image/upload/b_rgb:000000,o_60/v1517847670/5_uwh5s8.jpg", "http://res.cloudinary.com/jcdiaz1991/image/upload/b_rgb:000000,o_60/v1517933411/cris6f_utwgzq.jpg", "http://res.cloudinary.com/jcdiaz1991/image/upload/b_rgb:000000,o_60/v1517933419/crisf3_bdgh4h.jpg", "http://res.cloudinary.com/jcdiaz1991/image/upload/b_rgb:000000,o_60/v1517847679/8_x4zokc.jpg", "https://res.cloudinary.com/jcdiaz1991/image/upload/b_rgb:000000,o_60/v1517856537/9_x2i7tu.jpg", "http://res.cloudinary.com/jcdiaz1991/image/upload/b_rgb:000000,o_60/v1517847671/10_vuockf.jpg", "http://res.cloudinary.com/jcdiaz1991/image/upload/b_rgb:000000,o_60/v1517847674/11_sfuzxh.jpg", "http://res.cloudinary.com/jcdiaz1991/image/upload/b_rgb:000000,o_60/v1517933413/cris5f_gfacn3.jpg","http://res.cloudinary.com/jcdiaz1991/image/upload/b_rgb:000000,o_60/v1517933411/cris7f_tmtxy1.jpg","http://res.cloudinary.com/jcdiaz1991/image/upload/b_rgb:000000,o_60/v1517933416/crisf1_j3aau0.jpg", "http://res.cloudinary.com/jcdiaz1991/image/upload/b_rgb:000000,o_60/v1517847688/15_sygecg.jpg", "http://res.cloudinary.com/jcdiaz1991/image/upload/b_rgb:000000,o_60/v1517933416/cris8f_bljchz.jpg","http://res.cloudinary.com/jcdiaz1991/image/upload/b_rgb:000000,o_60/v1517933418/cris15f_sy8mzn.jpg", "http://res.cloudinary.com/jcdiaz1991/image/upload/b_rgb:000000,o_60/v1517933418/cris9f_peanlv.jpg","http://res.cloudinary.com/jcdiaz1991/image/upload/b_rgb:000000,o_60/v1517933419/crisf2_opbjgx.jpg","http://res.cloudinary.com/jcdiaz1991/image/upload/b_rgb:000000,o_60/v1517882074/Untitled_ufgwtk.jpg"];
$(document).ready(function() {
    $(".nextQ").on("click", newQuote);
    $(".tweet").on("click", function(){   window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('"'+ quotes[num].quote + '" -- ' + quotes[num].name));
    })});
var numbers = [];
var num;

function newQuote  (){
  if (numbers.length >= 20){
    numbers = [];};
  num = Math.floor(Math.random() * (19 - 0 +1)) + 0;
  if (numbers.length < 1){
  numbers.push(num);
    console.log("numbers: "+ numbers + " num: " + num);
    return document.body.style.backgroundImage = "url('" + background[num] + "')", $(".quote").html('"' + quotes[num].quote + '"' + " - " + quotes[num].name);
  };

  for (var i = 0; i<numbers.length; i ++ ){
    if (num === numbers[i]){
      return newQuote();}};
  console.log("numbers: "+ numbers + " num: " + num);
  numbers.push(num);
  return document.body.style.backgroundImage = "url('" + background[num] + "')", $(".quote").html('"' + quotes[num].quote + '"' + " - " + quotes[num].name);
};

newQuote();
