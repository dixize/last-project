function scrollToTerritory() {
    const element = document.getElementById('territory-section');
    element.scrollIntoView({ behavior: 'smooth' });
}

// Данные для модальных окон (взяты из предоставленных файлов)
const slideData = {
    robotics: {
        title: "Роботизация производства",
        pre: ["Тренд на импортозамещение", "Субсидии до 50%", "Дефицит кадров"],
        areas: ["Резка (Лазерная, Плазменная)", "Сварка и Соединение", "Логистика и Паллетирование"],
        effects: ["Выработка +40%", "Снижение затрат на 20-40%", "Травматизм -50%"]
    },
    quality: {
        title: "Контроль качества",
        pre: ["Искусственный интеллект", "Оцифровка процессов", "Рост требований к качеству"],
        areas: ["Конвейерное производство", "Складская логистика", "Весогабаритный контроль"],
        effects: ["Брак -35%", "Скорость контроля +50%", "Издержки -20%"]
    },
    security: {
        title: "Средства охраны",
        pre: ["Требования ФЗ-256", "Антитеррористическая защищенность", "Развитие ИТ-технологий"],
        areas: ["Инженерные заграждения", "Биометрический СКУД", "Радары и тепловизоры"],
        effects: ["Точность 99.9%", "Реакция 2-3 сек", "Снижение инцидентов на 40%"]
    },
    eco: {
        title: "Безопасность и Эко",
        pre: ["Программа «Безопасный труд»", "Экологическая ответственность", "Законодательная база"],
        areas: ["Электронные наряды", "Системы предотвращения столкновений", "Сейсмостанции"],
        effects: ["Аварийность -50%", "Выявление угроз за 2 мин", "Стоимость устранения -40%"]
    },
    equipment: {
        title: "Тех. оборудование",
        pre: ["Импортозамещение агрегатов", "Автоматизация линий", "Повышение КПД"],
        areas: ["Паровые котлы и теплообменники", "Трансформаторные подстанции", "Компрессорные станции"],
        effects: ["Объем производства +20%", "Брак до 1%", "Затраты на ремонт -40%"]
    }
};

function openSlide(id) {
    const s = slideData[id];
    const content = document.getElementById('modal-content');
    
    content.innerHTML = `
        <span class="highlight-header animate__animated animate__fadeIn">Раздел системы</span>
        <h2 class="slide-title animate__animated animate__fadeInUp">${s.title}</h2>
        
        <div class="info-block animate__animated animate__fadeInUp" style="animation-delay: 0.2s">
            <span class="highlight-header">Предпосылки развития</span>
            <ul class="text-list">
                ${s.pre.map(p => `<li>${p}</li>`).join('')}
            </ul>
        </div>

        <div class="info-block animate__animated animate__fadeInUp" style="animation-delay: 0.3s">
            <span class="highlight-header">Ключевые решения</span>
            <ul class="text-list">
                ${s.areas.map(a => `<li>${a}</li>`).join('')}
            </ul>
        </div>

        <div class="info-block animate__animated animate__fadeInUp" style="animation-delay: 0.4s">
            <span class="highlight-header">Ожидаемые эффекты</span>
            <ul class="text-list">
                ${s.effects.map(e => `<li><strong>${e}</strong></li>`).join('')}
            </ul>
        </div>
    `;

    document.getElementById('modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeSlide() {
    document.getElementById('modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}
