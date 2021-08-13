const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector("form");
const result = document.querySelector(".result");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(form.q1,form.q2,form.q3,form.q4);
  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];
  console.log(userAnswers);
  userAnswers.forEach((ans, index) => {
    if (ans === correctAnswers[index]) score += 25;
  });
scrollTo(0,0);
  result.classList.remove('d-none');
 // console.log(result.querySelector('span'));

  console.log(score);
  let output=0;
  let timer=setInterval(()=>{
   result.querySelector('span').textContent=`${output}%`;
   if(output===score) clearInterval(timer);
   ++output;
  },10);
});
// setTimeout(()=>{
//    alert('bhot has rha h kyu be')
// },5000);