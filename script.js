const games = [
      "Minecraft(Рекомендуем)", "Among Us(Рекомендуем)", "Clash Royale", "Fortnite", "PUBG Mobile", "Call of Duty: Mobile", "Brawl Stars", "Genshin Impact", "Mario Kart Tour",
      "Words with Friends 2", "Skribbl.io", "Spaceteam", "Trivia Crack", "8 Ball Pool", "UNO!™", "Ludo King", "Roblox", "Drive Ahead!", "QuizUp",
      "Dead by Daylight Mobile", "Identity V", "Pokémon GO", "Garena Free Fire", "Mini Militia - Doodle Army 2", "Crossy Road", "Hill Climb Racing 2",
      "ARK: Survival Evolved", "Real Racing 3", "Mini Metro", "Terraria", "Clash of Clans", "Exploding Kittens", "Stardew Valley", "Into the Dead 2",
      "Star Wars™: Galaxy of Heroes", "Lords Mobile", "Hearthstone", "Plants vs. Zombies™ 2", "World Cricket Championship 2", "Vector 2",
      "Mobile Legends: Bang Bang", "Battlelands Royale", "Injustice 2", "Modern Combat Versus", "Special Forces Group 2", "BombSquad",
      "CATS: Crash Arena Turbo Stars", "Dungeon Hunter 5", "Tap Titans 2", "Gangstar Vegas", "Vainglory", "Cut the Rope 2", "Jetpack Joyride",
      "Real Steel World Robot Boxing", "Doodle Jump", "Soul Knight", "Critical Ops", "Badland Brawl", "Vainglory", "Drive Ahead!", "Bowmasters",
      "Shadow Fight 3", "Shadowgun Legends", "World of Tanks Blitz", "Modern Combat 5: eSports FPS", "Puzzle Fighter", "Sonic Dash", "Eternium",
      "The Walking Dead: No Man’s Land", "Fallout Shelter", "SoulCraft – Action RPG", "Pixel Gun 3D", "FIFA Soccer", "Score! Hero",
      "Zombie Gunship Survival", "Temple Run", "Racing Xtreme: Best Driver 3D", "Injustice: Gods Among Us", "Golf Clash", "Castle Clash",
      "Hungry Shark Evolution", "The Room", "Gear.Club", "Galaxy on Fire 2™ HD", "Boom Beach", "War Robots", "World War Heroes: WW2 FPS",
      "Sniper 3D Assassin®", "Angry Birds 2", "Zombie Frontier 3: Sniper FPS", "Battle Bay", "Asphalt 9: Legends", "Mini Metro",
      "Worms Zone .io - Voracious Snake", "Real Steel Boxing Champions", "Vector", "Special Forces Group 2", "ARK: Survival Evolved",
      "Dead Trigger 2", "Modern Combat Versus"
    ];

    // Функция для создания кнопки "Скачать в Play Market" для каждой игры
    function createGameButton(gameName) {
      const button = document.createElement('a');
      button.textContent = `Скачать ${gameName} в Play Market`;
      button.classList.add('game-button');
      button.href = `https://play.google.com/store/search?q=${encodeURIComponent(gameName)}`;
      button.target = '_blank'; // Открывать ссылку в новой вкладке
      return button;
    }

    // Найти контейнер для игр
    const gamesContainer = document.getElementById('gamesContainer');

    // Добавить кнопки для каждой игры в контейнер
    games.forEach(game => {
      const button = createGameButton(game);
      gamesContainer.appendChild(button);
    });
    







const form = document.getElementById('contact-form');
const submitButton = document.getElementById('submit-form');

submitButton.addEventListener('click', async function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const botToken = '6631340279:AAEOUQnjHD8NDRWxB5VvSK7tPKmaFE4D3vA'; // Замените на ваш токен бота
  const chatId = '2064802629'; // Замените на ваш Chat ID
  const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const formData = new FormData();
  formData.append('chat_id', chatId);
  formData.append('text', `Имя: ${name}
Email: ${email}
Сообщение: ${message}`);

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Ошибка при отправке сообщения');
    }

    alert('Сообщение успешно отправлено в Telegram!');
    form.reset();
  } catch (error) {
    console.error('Ошибка:', error);
    alert('Произошла ошибка при отправке сообщения в Telegram');
  }
});