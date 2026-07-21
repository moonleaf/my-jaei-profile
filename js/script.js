// 모바일 메뉴 토글
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.add('hidden')));

// 갤러리/일상사진 라이트박스
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
document.querySelectorAll('.gallery-img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
  });
});
lightbox.addEventListener('click', () => {
  lightbox.classList.add('hidden');
  lightbox.classList.remove('flex');
});

// data/profile.json에서 개인정보를 불러와 페이지에 채우기
fetch('data/profile.json')
  .then(res => res.json())
  .then(profile => {
    document.getElementById('hero-name').textContent = `키즈 모델 ${profile.nickname} 🌈`;
    document.getElementById('hero-catchphrase').textContent = profile.catchphrase;
    document.getElementById('profile-name').textContent = profile.name;
    document.getElementById('profile-age').textContent = profile.age;
    document.getElementById('profile-height').textContent = profile.height;
    document.getElementById('profile-specialty').textContent = profile.specialty;
    document.getElementById('profile-intro').textContent = `"${profile.intro}"`;
    document.getElementById('contact-agency').textContent = profile.agency;
    document.getElementById('contact-email').textContent = profile.email;
    document.getElementById('contact-email').href = `mailto:${profile.email}`;
    document.getElementById('contact-phone').textContent = profile.phone;
    document.getElementById('contact-instagram').textContent = profile.instagram;

    document.getElementById('career-list').innerHTML = profile.career.map(item => `
      <li class="flex items-center gap-4 bg-peach/30 rounded-2xl p-5">
        <span class="shrink-0 bg-pink-500 text-white text-lg rounded-full px-4 py-1">${item.date}</span>
        <span class="text-xl">${item.content}</span>
      </li>
    `).join('');
  })
  .catch(err => console.error('개인정보(data/profile.json)를 불러오지 못했습니다:', err));
