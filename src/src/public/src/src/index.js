import React, { useState } from 'react';
import { Search, BookOpen, User, Globe, ChevronDown, MessageCircle, Layers } from 'lucide-react';

export default function SapiensWebsite() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [activeTab, setActiveTab] = useState('excerpt');

  const chapters = [
    {
      id: 1,
      number: 1,
      title: 'Животное, отличающееся от других',
      description: 'История возникновения Homo sapiens и его предков',
      excerpt: 'Около 13,5 миллиардов лет назад возникла материя и энергия. На протяжении нескольких миллиардов лет они организовались в атомы и молекулы, затем в галактики и звезды. Примерно 4,5 миллиардов лет назад образовалась наша планета Земля.',
      questions: [
        'Что отличает Homo sapiens от других животных?',
        'Как развивались предки человека на протяжении миллионов лет?',
        'Какие биологические изменения были ключевыми для появления Homo sapiens?'
      ],
      images: [
        { url: 'https://images.unsplash.com/photo-1504681869696-d977211a0eeb?w=500&h=300&fit=crop', alt: 'Эволюция человека' },
        { url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=500&h=300&fit=crop', alt: 'Древний ландшафт' }
      ]
    },
    {
      id: 2,
      number: 2,
      title: 'Дерево познания',
      description: 'Когнитивная революция и её последствия',
      excerpt: 'Около 70 тысяч лет назад произошла когнитивная революция — резкое развитие человеческого мышления. Люди начали создавать мифы, воображаемые порядки, которые позволяли им сотрудничать в больших группах.',
      questions: [
        'Какова была когнитивная революция и когда она произошла?',
        'Как способность к воображению изменила ход человеческой истории?',
        'Почему мифы и воображаемые порядки так важны для общества?'
      ],
      images: [
        { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop', alt: 'Человеческое сознание' },
        { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop', alt: 'Интеллект' }
      ]
    },
    {
      id: 3,
      number: 3,
      title: 'День охотника-собирателя',
      description: 'Жизнь древних людей до сельского хозяйства',
      excerpt: 'Охотники-собиратели не были примитивными. Они обладали богатым языком, разнообразным знанием своей окружающей среды и сложными социальными структурами. Их жизнь была не обязательно хуже, чем у древних земледельцев.',
      questions: [
        'Была ли жизнь охотников-собирателей примитивной и бедной?',
        'Какие преимущества и недостатки имел образ жизни охотников-собирателей?',
        'Почему переход к земледелию был не всегда прогрессом?'
      ],
      images: [
        { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop', alt: 'Природа и охота' },
        { url: 'https://images.unsplash.com/photo-1518495285542-c8f051d4c744?w=500&h=300&fit=crop', alt: 'Первобытная жизнь' }
      ]
    },
    {
      id: 4,
      number: 4,
      title: 'Потоп',
      description: 'Расселение человечества по земле',
      excerpt: 'Когда сапиенсы впервые вышли из Африки, они столкнулись с совершенно неизвестной окружающей средой. Тем не менее, благодаря своей способности к обучению и творчеству, они адаптировались почти ко всем условиям на Земле.',
      questions: [
        'Как люди смогли адаптироваться к различным климатическим условиям?',
        'Какая роль сыграла креативность в расселении человечества?',
        'Как географическое распределение повлияло на развитие разных культур?'
      ],
      images: [
        { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop', alt: 'Расселение по земле' },
        { url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=300&fit=crop', alt: 'Миграция' }
      ]
    },
    {
      id: 5,
      number: 5,
      title: 'История лучше не писать',
      description: 'Появление письменности и государства',
      excerpt: 'Письменность появилась примерно в 3200 году до нашей эры в Месопотамии. Первые письменные тексты были бухгалтерскими записями — священники учитывали зерно и пиво. Письменность позволила управлять большими государствами.',
      questions: [
        'Как письменность изменила управление обществом?',
        'Почему первые записи были учетом ресурсов?',
        'Какова роль письменности в создании государств и законов?'
      ],
      images: [
        { url: 'https://images.unsplash.com/photo-1507842211343-583f20270319?w=500&h=300&fit=crop', alt: 'Древние письмена' },
        { url: 'https://images.unsplash.com/photo-1507842211343-583f20270319?w=500&h=300&fit=crop', alt: 'История письма' }
      ]
    },
    {
      id: 6,
      number: 6,
      title: 'Чума капитализма',
      description: 'Древние империи и их системы',
      excerpt: 'Древние империи создали первые универсальные политические системы. Империя — это политическое образование, которое охватывает множество различных народов и культур, объединённых под единой политической властью.',
      questions: [
        'Как империи управляли множеством разных народов и культур?',
        'Какие механизмы использовались для сохранения единства в империях?',
        'Был ли имперский строй прогрессом или угнетением?'
      ],
      images: [
        { url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=300&fit=crop', alt: 'Древние империи' },
        { url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=300&fit=crop', alt: 'Архитектура империй' }
      ]
    },
    {
      id: 7,
      number: 7,
      title: 'Встреча с Америкой',
      description: 'Эпоха географических открытий',
      excerpt: 'В 1492 году Колумб пересёк Атлантический океан. Это событие привело к столкновению двух миров, которые развивались независимо друг от друга более 10 000 лет. Последствия этого столкновения изменили ход всей человеческой истории.',
      questions: [
        'Как встреча двух цивилизаций изменила мир?',
        'Почему европейцы смогли завоевать Америку?',
        'Каковы были долгосрочные последствия колонизации?'
      ],
      images: [
        { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop', alt: 'Эпоха открытий' },
        { url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=300&fit=crop', alt: 'Путешествия' }
      ]
    },
    {
      id: 8,
      number: 8,
      title: 'Научная революция',
      description: 'Зарождение современной науки',
      excerpt: 'Научная революция началась в XVI веке. Учёные поняли, что они ничего не знают о мире и начали систематически его изучать. Они признали, что существуют пробелы в их знаниях, и это признание стало основой современной науки.',
      questions: [
        'Что такое научный метод и почему он важен?',
        'Как признание незнания привело к развитию науки?',
        'Какова роль науки в формировании современного мира?'
      ],
      images: [
        { url: 'https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=500&h=300&fit=crop', alt: 'Научные исследования' },
        { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop', alt: 'Наука и технология' }
      ]
    },
    {
      id: 9,
      number: 9,
      title: 'Индустриальная революция',
      description: 'Трансформация общества и экономики',
      excerpt: 'Индустриальная революция — это переход от аграрного общества к индустриальному. Машины начали заменять людей. Производство переместилось из деревень в города. Человечество впервые начало расходовать ископаемые энергоресурсы в больших масштабах.',
      questions: [
        'Как машины изменили экономику и общество?',
        'Были ли положительные или отрицательные последствия индустриализации?',
        'Какова роль ископаемых топлив в развитии современного мира?'
      ],
      images: [
        { url: 'https://images.unsplash.com/photo-1581092916550-e323be2ae537?w=500&h=300&fit=crop', alt: 'Промышленность' },
        { url: 'https://images.unsplash.com/photo-1581092160562-40feed08a289?w=500&h=300&fit=crop', alt: 'Индустриализация' }
      ]
    },
    {
      id: 10,
      number: 10,
      title: 'Конец человечества',
      description: 'Будущее Homo sapiens и искусственного интеллекта',
      excerpt: 'Мы стоим перед выбором. Развитие технологий может привести к созданию постчеловеческих существ, которые будут господствовать над миром. Вопрос в том, что мы хотим стать в будущем.',
      questions: [
        'Какое будущее нас ждет в эпоху искусственного интеллекта?',
        'Должны ли мы бояться технологического прогресса?',
        'Что означает быть человеком в будущем?'
      ],
      images: [
        { url: 'https://images.unsplash.com/photo-1677442d019cecf8d01cd100a7a4e60fb1ae695c?w=500&h=300&fit=crop', alt: 'Будущее и технология' },
        { url: 'https://images.unsplash.com/photo-1620712014215-c8c5788f46a9?w=500&h=300&fit=crop', alt: 'Искусственный интеллект' }
      ]
    }
  ];

  const filteredChapters = chapters.filter(chapter =>
    chapter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chapter.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-stone-100">
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-amber-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-amber-700" />
            <h1 className="text-2xl font-bold text-amber-900">
              Sapiens
            </h1>
          </div>
          <p className="text-sm text-stone-600">Юваль Ноа Харари</p>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-5xl font-bold text-amber-900 mb-4">
            Краткая история человечества
          </h2>
          <p className="text-lg text-stone-700 mb-6 leading-relaxed">
            Как Homo sapiens пришёл к господству над миром? Какие революции сформировали нашу историю? 
            Куда мы идём в будущем?
          </p>
          <p className="text-stone-600 mb-8">
            Исследуйте главные вехи эволюции человека, от когнитивной революции до современного мира.
          </p>
          <div className="flex gap-4">
            <Globe className="w-6 h-6 text-amber-700" />
            <User className="w-6 h-6 text-amber-800" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-amber-100 to-stone-200 rounded-lg p-8 text-center shadow-md">
          <BookOpen className="w-32 h-32 mx-auto text-amber-800 opacity-20 mb-4" />
          <p className="text-amber-900 font-semibold text-lg italic">История не движется к цели</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-stone-400" />
          <input
            type="text"
            placeholder="Поиск по главам..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-500 focus:outline-none transition bg-white text-stone-900 placeholder-stone-400"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold text-amber-900 mb-8">
          Главы книги
        </h3>
        
        {filteredChapters.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-stone-500 text-lg">Главы не найдены</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredChapters.map((chapter) => (
              <div
                key={chapter.id}
                onClick={() => setSelectedChapter(selectedChapter?.id === chapter.id ? null : chapter)}
                className={`cursor-pointer p-6 rounded-lg border-2 transition-all ${
                  selectedChapter?.id === chapter.id
                    ? 'border-amber-400 bg-amber-50 shadow-md'
                    : 'border-stone-200 bg-white hover:border-amber-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center text-amber-900 font-bold flex-shrink-0 shadow-md">
                    {chapter.number}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-amber-900">{chapter.title}</h4>
                    <p className="text-stone-600 mt-2">{chapter.description}</p>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-amber-700 transition-transform ${selectedChapter?.id === chapter.id ? 'rotate-180' : ''}`} />
                </div>
                
                {selectedChapter?.id === chapter.id && (
                  <div className="mt-4 pt-4 border-t-2 border-amber-200">
                    <div className="flex gap-2 mb-4">
                      <button
                        onClick={(e) => { e.stopPropagation(); setActiveTab('excerpt'); }}
                        className={`flex items-center gap-1 px-3 py-1 rounded transition ${
                          activeTab === 'excerpt'
                            ? 'bg-amber-500 text-white'
                            : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                        }`}
                      >
                        <BookOpen className="w-4 h-4" />
                        Отрывок
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); setActiveTab('questions'); }}
                        className={`flex items-center gap-1 px-3 py-1 rounded transition ${
                          activeTab === 'questions'
                            ? 'bg-amber-500 text-white'
                            : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                        }`}
                      >
                        <MessageCircle className="w-4 h-4" />
                        Вопросы
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); setActiveTab('images'); }}
                        className={`flex items-center gap-1 px-3 py-1 rounded transition ${
                          activeTab === 'images'
                            ? 'bg-amber-500 text-white'
                            : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                        }`}
                      >
                        <Layers className="w-4 h-4" />
                        Изображения
                      </button>
                    </div>

                    {activeTab === 'excerpt' && (
                      <div>
                        <p className="text-sm font-semibold text-amber-900 mb-2">Отрывок:</p>
                        <p className="text-stone-700 leading-relaxed italic">
                          {chapter.excerpt}
                        </p>
                      </div>
                    )}

                    {activeTab === 'questions' && (
                      <div>
                        <p className="text-sm font-semibold text-amber-900 mb-3">Вопросы для рефлексии:</p>
                        <ul className="space-y-2">
                          {chapter.questions.map((q, idx) => (
                            <li key={idx} className="text-stone-700 flex gap-2">
                              <span className="text-amber-700 font-bold">{idx + 1}.</span>
                              <span>{q}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeTab === 'images' && (
                      <div>
                        <p className="text-sm font-semibold text-amber-900 mb-3">Визуальные материалы:</p>
                        <div className="grid grid-cols-2 gap-3">
                          {chapter.images.map((img, idx) => (
                            <img
                              key={idx}
                              src={img.url}
                              alt={img.alt}
                              className="w-full h-32 object-cover rounded-lg hover:opacity-80 transition border border-amber-200"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="bg-gradient-to-r from-amber-100 to-stone-200 text-amber-900 py-12 mt-12 border-t-2 border-amber-200">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-amber-800">10</p>
            <p className="text-stone-700 mt-2">Основных глав</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-amber-800">70k+</p>
            <p className="text-stone-700 mt-2">Лет истории</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-amber-800">30+</p>
            <p className="text-stone-700 mt-2">Вопросов для размышления</p>
          </div>
        </div>
      </section>

      <footer className="bg-white text-stone-600 py-8 mt-12 border-t border-amber-200">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2">© 2025 Sapiens Study Platform</p>
          <p className="text-sm text-stone-500">Основано на книге Юваля Ноа Харари</p>
        </div>
      </footer>
    </div>
  );
}
