function go(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.bottomNav button').forEach(b=>b.classList.remove('active'));
  const map={home:0,ai:1,trucks:2,faults:3};
  if(map[id]!==undefined) document.querySelectorAll('.bottomNav button')[map[id]].classList.add('active');
  document.getElementById('sideMenu').classList.remove('open');
  window.scrollTo({top:0,behavior:'smooth'});
}
function toggleMenu(){document.getElementById('sideMenu').classList.toggle('open')}
