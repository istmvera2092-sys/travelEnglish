import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white font-sans">

      {/* HERO */}
      <section className="relative px-6 py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b0f1a] via-[#0f172a] to-black opacity-90" />

        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-orange-400 to-yellow-300 text-transparent bg-clip-text">
            Английский для путешествий
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Научим говорить свободно за границей — от аэропорта до дружбы с новыми людьми
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <p className="text-lg text-gray-300 leading-relaxed">
          Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? Этот курс научит вашего ребёнка реальному разговорному английскому.
        </p>
      </section>

      {/* FOR WHOM */}
      <section className="px-6 py-16 bg-[#0f172a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-teal-400">📌 Для кого курс</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#020617] border border-teal-500/20 glow">
              Первая группа: 4–5 класс
            </div>
            <div className="p-6 rounded-2xl bg-[#020617] border border-orange-400/20 glow">
              Вторая группа: 6–8 класс
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-orange-400">📚 Программа курса</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Аэропорт без стресса",
            "В отеле: заселение и помощь",
            "Кафе и рестораны",
            "Ориентирование в городе",
            "Экстренные случаи",
            "Туризм и развлечения",
            "Дружба в путешествиях",
            "Дипломный проект"
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-[#020617] border border-white/10 shadow-xl"
            >
              <p className="text-lg">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-20 bg-[#0f172a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-teal-400">✨ Почему этот курс особенный?</h2>
          <ul className="space-y-4 text-gray-300">
            <li>• Практическая разговорная речь</li>
            <li>• Реальные ситуации путешествий</li>
            <li>• Игры и интерактив</li>
            <li>• Уровень A2–B1</li>
          </ul>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl mb-6 text-orange-300">💻 Что потребуется</h2>
        <ul className="text-gray-300 space-y-2">
          <li>• Компьютер или ноутбук</li>
          <li>• Наушники и микрофон</li>
          <li>• Интернет и Zoom</li>
        </ul>
      </section>

      {/* SCHEDULE */}
      <section className="px-6 py-16 bg-[#0f172a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl mb-6 text-teal-300">🕒 Расписание</h2>
          <p className="text-gray-300">Четверг, 15:00 — 4–5 класс</p>
          <p className="text-gray-300">Пятница, 15:30 — 6–8 класс</p>
        </div>
      </section>

      {/* PRICE */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl mb-6 text-orange-300">💳 Стоимость</h2>
        <p className="text-gray-300">Полный курс: 12 000 руб</p>
        <p className="text-gray-300">1 урок: 1 300 руб</p>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-2xl mb-6 text-white">📢 Набор открыт!</h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          Маленькие группы до 6 человек. Места ограничены.
        </p>
        <button className="px-10 py-4 rounded-2xl text-lg font-semibold bg-gradient-to-r from-teal-400 to-orange-400 text-black shadow-xl hover:scale-105 transition">
          Записаться на курс
        </button>
      </section>

    </div>
  );
}