import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function SapiensWebsite() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [activeTab, setActiveTab] = useState('excerpt');
  const [darkMode, setDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibleElements, setVisibleElements] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleElements(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const timelineEvents = [
    { id: 1, title: '13.5 млрд лет назад', event: 'Возникновение материи и энергии', icon: '🌌' },
    { id: 2, title: '70,000 лет назад', event: 'Когнитивная революция', icon: '💡' },
    { id: 3, title: '12,000 лет назад', event: 'Аграрная революция', icon: '🌾' },
    { id: 4, title: '5,000 лет назад', event: 'Появление письменности', icon: '📜' },
    { id: 5, title: '2,000 лет назад', event: 'Расцвет древних империй', icon: '👑' },
    { id: 6, title: '1492', event: 'Встреча с Америкой', icon: '⛵' },
    { id: 7, title: '1600s', event: 'Научная революция', icon: '🔬' },
    { id: 8, title: '1800s', event: 'Индустриальная революция', icon: '⚙️' },
    { id: 9, title: 'Сегодня', event: 'Цифровая эпоха', icon: '💻' },
    { id: 10, title: 'Будущее', event: 'Эпоха искусственного интеллекта', icon: '🤖' }
  ];

  const chapters = [
    {
      id: 1,
      number: 1,
      title: 'Животное, отличающееся от других',
      description: 'История возникновения Homo sapiens и его предков',
      excerpt: 'Около 13,5 миллиардов лет назад возникла материя и энергия. На протяжении нескольких миллиардов лет они организовались в атомы и молекулы, затем в галактики и звезды. Примерно 4,5 миллиардов лет назад образовалась наша планета Земля.',
      questions: ['Что отличает Homo sapiens от других животных?', 'Как развивались предки человека на протяжении миллионов лет?', 'Какие биологические изменения были ключевыми для появления Homo sapiens?'],
      icon: '🧬'
    },
    {
      id: 2,
      number: 2,
      title: 'Дерево познания',
      description: 'Когнитивная революция и её последствия',
      excerpt: 'Около 70 тысяч лет назад произошла когнитивная революция — резкое развитие человеческого мышления. Люди начали создавать мифы, воображаемые порядки, которые позволяли им сотрудничать в больших группах.',
      questions: ['Какова была когнитивная революция и когда она произошла?', 'Как способность к воображению изменила ход человеческой истории?', 'Почему мифы и воображаемые порядки так важны для общества?'],
      icon: '💡'
    },
    {
      id: 3,
      number: 3,
      title: 'День охотника-собирателя',
      description: 'Жизнь древних людей до сельского хозяйства',
      excerpt: 'Охотники-собиратели не были примитивными. Они обладали богатым языком, разнообразным знанием своей окружающей среды и сложными социальными структурами. Их жизнь была не обязательно хуже, чем у древних земледельцев.',
      questions: ['Была ли жизнь охотников-собирателей примитивной и бедной?', 'Какие преимущества и недостатки имел образ жизни охотников-собирателей?', 'Почему переход к земледелию был не всегда прогрессом?'],
      icon: '🏹'
    },
    {
      id: 4,
      number: 4,
      title: 'Потоп',
      description: 'Расселение человечества по земле',
      excerpt: 'Когда сапиенсы впервые вышли из Африки, они столкнулись с совершенно неизвестной окружающей средой. Тем не менее, благодаря своей способности к обучению и творчеству, они адаптировались почти ко всем условиям на Земле.',
      questions: ['Как люди смогли адаптироваться к различным климатическим условиям?', 'Какая роль сыграла креативность в расселении человечества?', 'Как географическое распределение повлияло на развитие разных культур?'],
      icon: '🌍'
    },
    {
      id: 5,
      number: 5,
      title: 'История лучше не писать',
      description: 'Появление письменности и государства',
      excerpt: 'Письменность появилась примерно в 3200 году до нашей эры в Месопотамии. Первые письменные тексты были бухгалтерскими записями — священники учитывали зерно и пиво. Письменность позволила управлять большими государствами.',
      questions: ['Как письменность изменила управление обществом?', 'Почему первые записи были учетом ресурсов?', 'Какова роль письменности в создании государств и законов?'],
      icon: '📜'
    },
    {
      id: 6,
      number: 6,
      title: 'Чума капитализма',
      description: 'Древние империи и их системы',
      excerpt: 'Древние империи создали первые универсальные политические системы. Империя — это политическое образование, которое охватывает множество различных народов и культур, объединённых под единой политической властью.',
      questions: ['Как империи управляли множеством разных народов и культур?', 'Какие механизмы использовались для сохранения единства в империях?', 'Был ли имперский строй прогрессом или угнетением?'],
      icon: '👑'
    },
    {
      id: 7,
      number: 7,
      title: 'Встреча с Америкой',
      description: 'Эпоха географических открытий',
      excerpt: 'В 1492 году Колумб пересёк Атлантический океан. Это событие привело к столкновению двух миров, которые развивались независимо друг от друга более 10 000 лет. Последствия этого столкновения изменили ход всей человеческой истории.',
      questions: ['Как встреча двух цивилизаций изменила мир?', 'Почему европейцы смогли завоевать Америку?', 'Каковы были долгосрочные последствия колонизации?'],
      icon: '⛵'
    },
    {
      id: 8,
      number: 8,
      title: 'Научная революция',
      description: 'Зарождение современной науки',
      excerpt: 'Научная революция началась в XVI веке. Учёные поняли, что они ничего не знают о мире и начали систематически его изучать. Они признали, что существуют пробелы в их знаниях, и это признание стало основой современной науки.',
      questions: ['Что такое научный метод и почему он важен?', 'Как признание незнания привело к развитию науки?', 'Какова роль науки в формировании современного мира?'],
      icon: '🔬'
    },
    {
      id: 9,
      number: 9,
      title: 'Индустриальная революция',
      description: 'Трансформация общества и экономики',
      excerpt: 'Индустриальная революция — это переход от аграрного общества к индустриальному. Машины начали заменять людей. Производство переместилось из деревень в города. Человечество впервые начало расходовать ископаемые энергоресурсы в больших масштабах.',
      questions: ['Как машины изменили экономику и общество?', 'Были ли положительные или отрицательные последствия индустриализации?', 'Какова роль ископаемых топлив в развитии современного мира?'],
      icon: '⚙️'
    },
    {
      id: 10,
      number: 10,
      title: 'Конец человечества',
      description: 'Будущее Homo sapiens и искусственного интеллекта',
      excerpt: 'Мы стоим перед выбором. Развитие технологий может привести к созданию постчеловеческих существ, которые будут господствовать над миром. Вопрос в том, что мы хотим стать в будущем.',
      questions: ['Какое будущее нас ждет в эпоху искусственного интеллекта?', 'Должны ли мы бояться технологического прогресса?', 'Что означает быть человеком в будущем?'],
      icon: '🤖'
    }
  ];

  const filteredChapters = chapters.filter(chapter =>
    chapter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chapter.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const bgColor = darkMode ? '#111827' : '#fef3c7';
  const cardBg = darkMode ? '#1f2937' : '#ffffff';
  const textColor = darkMode ? '#ffffff' : '#000000';
  const borderColor = darkMode ? '#374151' : '#fed7aa';
  const timelineColor = darkMode ? '#3b82f6' : '#f59e0b';

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
    transition: 'transform 0.1s ease-out'
  };

  const fadeInStyle = (id) => ({
    opacity: visibleElements[id] ? 1 : 0,
    transform: visibleElements[id] ? 'translateY(0)' : 'translateY(20px)',
    transition: 'all 0.8s ease-out'
  });

  return (
    <div style={{ minHeight: '100vh', background: bgColor, transition: 'background 0.3s', color: textColor }}>
      <style>{`
        * { scroll-behavior: smooth; }
        @keyframes glow { 
          0%, 100% { box-shadow: 0 0 20px rgba(245, 158, 11, 0.3); } 
          50% { box-shadow: 0 0 30px rgba(245, 158, 11, 0.6); } 
        }
        .glow-card:hover { animation: glow 2s ease-in-out; }
      `}</style>

      <nav style={{ background: cardBg, boxShadow: '0 4px 6px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 50, borderBottom: `1px solid ${borderColor}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '2rem' }}>📚</span>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: darkMode ? '#fcd34d' : '#78350f', margin: 0 }}>Sapiens</h1>
          </div>
          <button onClick={() => setDarkMode(!darkMode)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem', padding: '0.5rem' }}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1rem', ...parallaxStyle }}>
        <div data-animate="true" id="hero" style={fadeInStyle('hero')}>
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem' }}>
            Краткая история человечества
          </h2>
          <p style={{ fontSize: '1.125rem', color: darkMode ? '#d1d5db' : '#57534e', lineHeight: '1.6' }}>
            Как Homo sapiens пришёл к господству над миром? Какие революции сформировали нашу историю? Куда мы идём в будущем?
          </p>
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1rem', background: darkMode ? 'rgba(31, 41, 55, 0.5)' : 'rgba(254, 243, 199, 0.3)', borderRadius: '1rem', marginBottom: '3rem' }}>
        <h3 data-animate="true" id="timeline-title" style={{ fontSize: '2rem', fontWeight: 'bold', color: darkMode ? '#fcd34d' : '#78350f', marginBottom: '2rem', textAlign: 'center', ...fadeInStyle('timeline-title') }}>
          ⏳ Временная шкала истории
        </h3>
        
        <div style={{ position: 'relative', paddingLeft: '3rem' }}>
          {timelineEvents.map((event, idx) => (
            <div key={event.id} data-animate="true" id={`timeline-${event.id}`} style={{ marginBottom: '2rem', position: 'relative', ...fadeInStyle(`timeline-${event.id}`) }}>
              <div style={{ 
                position: 'absolute', 
                left: '-2.5rem', 
                top: '0', 
                width: '2rem', 
                height: '2rem', 
                background: timelineColor, 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '1rem',
                boxShadow: `0 0 0 4px ${cardBg}, 0 0 0 6px ${timelineColor}`,
                zIndex: 2,
                cursor: 'pointer'
              }}>
                {event.icon}
              </div>
              
              {idx < timelineEvents.length - 1 && (
                <div style={{ 
                  position: 'absolute', 
                  left: '-1.85rem', 
                  top: '2rem', 
                  width: '2px', 
                  height: '2rem', 
                  background: timelineColor,
                  opacity: 0.3,
                  zIndex: 1
                }} />
              )}
              
              <div className="glow-card" style={{ background: cardBg, padding: '1rem', borderRadius: '0.5rem', border: `1px solid ${borderColor}`, cursor: 'pointer', transition: 'all 0.3s ease' }} onClick={() => setSelectedChapter(chapters[event.id - 1])}>
                <p style={{ fontSize: '0.875rem', fontWeight: 'bold', color: timelineColor, margin: '0 0 0.5rem 0' }}>{event.title}</p>
                <p style={{ fontSize: '1.125rem', fontWeight: '600', color: darkMode ? '#fcd34d' : '#78350f', margin: '0' }}>{event.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem 2rem' }}>
        <div style={{ position: 'relative', marginBottom: '2rem' }}>
          <input 
            type="text" 
            placeholder="Поиск по главам..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', border: `2px solid ${borderColor}`, borderRadius: '0.5rem', fontSize: '1rem', backgroundColor: cardBg, color: textColor }} 
          />
          <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}>🔍</span>
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem 3rem' }}>
        <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: darkMode ? '#fcd34d' : '#78350f', marginBottom: '2rem' }}>Главы книги</h3>
        {filteredChapters.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <p style={{ color: darkMode ? '#9ca3af' : '#9f9b97', fontSize: '1.125rem' }}>Главы не найдены</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
            {filteredChapters.map((chapter) => (
              <div 
                key={chapter.id} 
                data-animate="true" 
                id={`chapter-${chapter.id}`} 
                style={{ 
                  ...fadeInStyle(`chapter-${chapter.id}`), 
                  padding: '1.5rem', 
                  borderRadius: '1rem', 
                  border: `2px solid ${selectedChapter?.id === chapter.id ? (darkMode ? '#fbbf24' : '#b45309') : borderColor}`, 
                  background: selectedChapter?.id === chapter.id ? (darkMode ? 'linear-gradient(135deg, #374151 0%, #1f2937 100%)' : 'linear-gradient(135deg, #fef3c7 0%, #fce7f3 100%)') : cardBg, 
                  cursor: 'pointer', 
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }} 
                onClick={() => setSelectedChapter(selectedChapter?.id === chapter.id ? null : chapter)}
              >
                <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                  <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>{chapter.icon}</div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: darkMode ? '#fcd34d' : '#78350f', margin: 0, marginBottom: '0.5rem' }}>
                      {chapter.title}
                    </h4>
                    <p style={{ color: darkMode ? '#d1d5db' : '#78716c', margin: 0 }}>{chapter.description}</p>
                  </div>
                </div>
                {selectedChapter?.id === chapter.id && (
                  <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: `2px solid ${borderColor}` }}>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                      {['excerpt', 'questions'].map((tab) => (
                        <button 
                          key={tab} 
                          onClick={(e) => { e.stopPropagation(); setActiveTab(tab); }} 
                          style={{ 
                            padding: '0.5rem 0.75rem', 
                            borderRadius: '0.25rem', 
                            border: 'none', 
                            cursor: 'pointer', 
                            background: activeTab === tab ? (darkMode ? '#f59e0b' : '#b45309') : (darkMode ? '#1f2937' : '#fef08a'), 
                            color: activeTab === tab ? 'white' : (darkMode ? '#fcd34d' : '#78350f'), 
                            fontWeight: '500' 
                          }}
                        >
                          {tab === 'excerpt' ? 'Отрывок' : 'Вопросы'}
                        </button>
                      ))}
                    </div>
                    {activeTab === 'excerpt' && (
                      <div>
                        <p style={{ fontSize: '0.875rem', fontWeight: '600', color: darkMode ? '#fcd34d' : '#78350f', marginBottom: '0.5rem' }}>Отрывок:</p>
                        <p style={{ color: darkMode ? '#d1d5db' : '#57534e', lineHeight: '1.6', fontStyle: 'italic', margin: 0 }}>{chapter.excerpt}</p>
                      </div>
                    )}
                    {activeTab === 'questions' && (
                      <div>
                        <p style={{ fontSize: '0.875rem', fontWeight: '600', color: darkMode ? '#fcd34d' : '#78350f', marginBottom: '0.75rem' }}>Вопросы для рефлексии:</p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {chapter.questions.map((q, idx) => (
                            <li key={idx} style={{ color: darkMode ? '#d1d5db' : '#57534e', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                              <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>{idx + 1}.</span>
                              <span>{q}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1rem', marginTop: '3rem' }}>
        <h3 data-animate="true" id="author-title" style={{ fontSize: '2rem', fontWeight: 'bold', color: darkMode ? '#fcd34d' : '#78350f', marginBottom: '2rem', textAlign: 'center', ...fadeInStyle('author-title') }}>
          👤 Об авторе
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', background: cardBg, padding: '2rem', borderRadius: '1rem', border: `2px solid ${borderColor}`, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          <div data-animate="true" id="author-photo" style={{ ...fadeInStyle('author-photo'), display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden', border: `4px solid ${darkMode ? '#f59e0b' : '#b45309'}`, marginBottom: '1rem', boxShadow: '0 8px 20px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(135deg, ${darkMode ? '#374151' : '#fef3c7'} 0%, ${darkMode ? '#1f2937' : '#fed7aa'} 100%)`, fontSize: '5rem' }}>
              👤
            </div>
            <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: darkMode ? '#fcd34d' : '#78350f', margin: '0 0 0.5rem 0' }}>Юваль Ной Харари</h4>
            <p style={{ color: darkMode ? '#d1d5db' : '#78716c', fontSize: '0.875rem', textAlign: 'center', margin: 0 }}>Историк, философ, писатель</p>
          </div>
          
          <div data-animate="true" id="author-bio" style={fadeInStyle('author-bio')}>
            <h5 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: darkMode ? '#fbbf24' : '#92400e', marginBottom: '1rem' }}>📚 Биография</h5>
            <p style={{ color: darkMode ? '#d1d5db' : '#57534e', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Юваль Ной Харари — израильский историк и профессор, специализирующийся на всемирной истории. Родился в 1976 году в Хайфе, Израиль. Его работы сосредоточены на макроисторических вопросах: что отличает человека от других животных? Есть ли справедливость в истории? Счастливы ли люди стали с течением времени?
            </p>
            
            <h5 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: darkMode ? '#fbbf24' : '#92400e', marginBottom: '1rem' }}>🎓 Академический путь</h5>
            <ul style={{ color: darkMode ? '#d1d5db' : '#57534e', lineHeight: '1.8', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Бакалавриат по истории в Еврейском университете в Иерусалиме (2000)</li>
              <li>Магистратура по средневековой истории (2002)</li>
              <li>Докторская степень (PhD) по истории в Оксфордском университете (2002-2006)</li>
              <li>Профессор истории в Еврейском университете с 2005 года</li>
              <li>Специализация: военная история, средневековье, всемирная история</li>
            </ul>
            
            <h5 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: darkMode ? '#fbbf24' : '#92400e', marginBottom: '1rem' }}>✨ Достижения</h5>
            <p style={{ color: darkMode ? '#d1d5db' : '#57534e', lineHeight: '1.6', margin: 0 }}>
              Книги Харари переведены на 65 языков и проданы тиражом более 35 миллионов экземпляров. Его лекции посещают мировые лидеры, включая Эммануэля Макрона, Ангелу Меркель и Марка Цукерберга. В 2019 году Харари и его муж Ицик Яхав основали Sapienship — организацию, занимающуюся глобальными проблемами.
            </p>
          </div>
        </div>
        
        <h3 data-animate="true" id="other-books-title" style={{ fontSize: '2rem', fontWeight: 'bold', color: darkMode ? '#fcd34d' : '#78350f', marginBottom: '2rem', marginTop: '4rem', textAlign: 'center', ...fadeInStyle('other-books-title') }}>
          📖 Другие книги автора
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {[
            {
              title: 'Homo Deus: Краткая история будущего',
              year: '2015',
              description: 'Что ждёт человечество в будущем? Харари исследует возможные сценарии развития технологий, искусственного интеллекта и биоинженерии.',
              icon: '🔮',
              topics: ['Будущее', 'ИИ', 'Биотехнологии']
            },
            {
              title: '21 урок для XXI века',
              year: '2018',
              description: 'Анализ самых важных вызовов современности: от технологической революции до постправды и терроризма.',
              icon: '🌐',
              topics: ['Современность', 'Технологии', 'Общество']
            },
            {
              title: 'Sapiens: Графическая версия',
              year: '2020',
              description: 'Адаптация знаменитого "Sapiens" в формате графического романа с иллюстрациями и более доступным изложением.',
              icon: '🎨',
              topics: ['Графика', 'История', 'Комикс']
            }
          ].map((book, idx) => (
            <div 
              key={idx} 
              data-animate="true" 
              id={`book-${idx}`} 
              style={{ 
                ...fadeInStyle(`book-${idx}`), 
                background: cardBg, 
                padding: '1.5rem', 
                borderRadius: '1rem', 
                border: `2px solid ${borderColor}`, 
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{book.icon}</div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: darkMode ? '#fcd34d' : '#78350f', marginBottom: '0.5rem' }}>
                {book.title}
              </h4>
              <p style={{ fontSize: '0.875rem', color: darkMode ? '#9ca3af' : '#a8a29e', marginBottom: '1rem' }}>
                Опубликовано: {book.year}
              </p>
              <p style={{ color: darkMode ? '#d1d5db' : '#57534e', lineHeight: '1.6', marginBottom: '1rem' }}>
                {book.description}
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {book.topics.map((topic, topicIdx) => (
                  <span 
                    key={topicIdx} 
                    style={{ 
                      padding: '0.25rem 0.75rem', 
                      background: darkMode ? '#374151' : '#fef08a', 
                      color: darkMode ? '#fcd34d' : '#78350f', 
                      borderRadius: '1rem', 
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: `linear-gradient(90deg, ${darkMode ? '#1f2937' : '#fef3c7'} 0%, ${darkMode ? '#111827' : '#f5f3f0'} 100%)`, padding: '3rem 1rem', marginTop: '3rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          <div data-animate="true" id="stat-1" style={fadeInStyle('stat-1')}>
            <p style={{ fontSize: '2.25rem', fontWeight: 'bold', color: darkMode ? '#fbbf24' : '#92400e', margin: 0, marginBottom: '0.5rem' }}>10</p>
            <p style={{ color: darkMode ? '#d1d5db' : '#78716c', margin: 0 }}>Основных глав</p>
          </div>
          <div data-animate="true" id="stat-2" style={fadeInStyle('stat-2')}>
            <p style={{ fontSize: '2.25rem', fontWeight: 'bold', color: darkMode ? '#fbbf24' : '#92400e', margin: 0, marginBottom: '0.5rem' }}>70k+</p>
            <p style={{ color: darkMode ? '#d1d5db' : '#78716c', margin: 0 }}>Лет истории</p>
          </div>
          <div data-animate="true" id="stat-3" style={fadeInStyle('stat-3')}>
            <p style={{ fontSize: '2.25rem', fontWeight: 'bold', color: darkMode ? '#fbbf24' : '#92400e', margin: 0, marginBottom: '0.5rem' }}>3</p>
            <p style={{ color: darkMode ? '#d1d5db' : '#78716c', margin: 0 }}>Великих революции</p>
          </div>
        </div>
      </section>

      <footer style={{ background: darkMode ? '#1f2937' : '#fef3c7', padding: '2rem 1rem', borderTop: `1px solid ${borderColor}`, marginTop: '3rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: darkMode ? '#d1d5db' : '#78716c', margin: 0 }}>
            © 2025 Sapiens — Краткая история человечества
          </p>
          <p style={{ color: darkMode ? '#9ca3af' : '#a8a29e', fontSize: '0.875rem', marginTop: '0.5rem' }}>
            По мотивам книги Юваля Ноя Харари
          </p>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.render(<SapiensWebsite />, document.getElementById('root'));
