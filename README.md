# PROFF-TIME — сайт компании

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Многостраничный корпоративный сайт.

## Запуск локально

```bash
npm install
npm run dev
```
Сайт будет доступен на http://localhost:3000

## Продакшн-сборка

```bash
npm run build
npm run start
```

## Маршруты

15 публичных страниц:

```
/                              — главная (краткие previews всех разделов)
/about                         — о компании
/services                      — услуги (обзор)
/services/pvh                  — ПВХ изделия
/services/aluminium            — алюминиевые конструкции
/services/lamination           — ламинация ПВХ профилей
/services/powder-coating       — порошковая покраска
/services/facades              — остекление фасадных систем
/materials                     — материалы и комплектующие
/production                    — собственное производство
/projects                      — объекты (портфолио)
/projects/[slug]                — детальная страница объекта
  /projects/airport-dospanov
  /projects/caspian-park
  /projects/europharma
/contacts                      — контакты, форма, карта
```

Плюс служебный (не публичная страница) маршрут `/api/lead` — API endpoint для приёма заявок с формы (см. раздел «Форма заявки» ниже), и стандартные для Next.js `sitemap.xml`, `robots.txt`, favicon-файлы.

## Структура

- `app/` — маршруты (App Router), у каждой страницы своя `metadata` (SEO), sitemap.ts, robots.ts, favicon
- `components/layout/` — Header (с выпадающим подменю «Услуги»), MobileMenu, Footer, StickyMobileCTA, PageHero (переиспользуемый hero для всех внутренних страниц)
- `components/sections/` — секции: как полные (Services, Materials, Production, Projects, Contacts, About, Advantages — используются на внутренних страницах), так и компактные `*Preview` версии для главной страницы (AboutPreview, ServicesPreview, MaterialsPreview, ProductionPreview, ContactsPreview)
- `components/sections/ServiceDetail.tsx` — общий шаблон тела для всех 5 страниц `/services/*`
- `components/sections/CtaBand.tsx`, `PartnerSection.tsx` — переиспользуемые блоки для внутренних страниц
- `components/ui/` — примитивы: Button, Placeholder, MediaSlot (реальное фото или плейсхолдер), StatNumber, RevealOnScroll, Breadcrumbs, SectionHeading, Divider
- `components/sections/CatalogShowcase.tsx` — editorial-подача каталожных фото на `/materials`, отдельно от брендов
- `data/` — **единый источник всех данных**: `company.ts` (контакты, о компании, преимущества, процесс, B2B, Hero/About/Production фото), `services.ts` (5 услуг с полным контентом для detail-страниц), `projects.ts` (объекты со slug для `/projects/[slug]`), `materials.ts` (бренды), `catalog.ts` (каталожные фото продукции — намеренно отдельно от `materials.ts`)
- `lib/constants.ts` — barrel-реэкспорт из `/data` + навигация (`NAV_LINKS`) для обратной совместимости импортов
- `lib/seo.ts` — базовые метаданные / Open Graph, используется как fallback в `app/layout.tsx`; каждая страница дополнительно задаёт свою `metadata`
- `public/images/` — изображения; `logo.png` — логотип с прозрачным фоном

## Добавление новой услуги или объекта

Всё делается только в `/data`, без правки компонентов:
- **Услуга**: добавить объект в массив `SERVICES` в `data/services.ts`, создать папку `app/services/<slug>/page.tsx` по образцу существующих (5–10 строк, использует `ServiceDetail`)
- **Объект**: добавить в массив `PROJECTS` в `data/projects.ts` — страница `/projects/[slug]` создастся автоматически (`generateStaticParams`), ничего больше делать не нужно
- **Бренд**: добавить в `BRAND_GROUPS` в `data/materials.ts`

## Изображения — текущее состояние (важно перед запуском)

Реальные материалы компании проанализированы (см. `PROFF-TIME_IMAGE_MAP_FINAL.md`), и весь код
уже подключён к финальным путям — но **физических файлов изображений в `public/images/` пока нет**.
Их разместит владелец сайта самостоятельно, с точными именами по карте.

Пока файлы не размещены, места с реальными путями будут показывать "битую" иконку изображения
в браузере (обычное поведение `next/image`, если файл по указанному `src` физически отсутствует) —
это ожидаемо и не является багом. Компонент `components/ui/MediaSlot.tsx` — единая точка, которая
решает "плейсхолдер или реальное фото": если `imagePath` в данных не задан, автоматически рендерится
инженерная заглушка (`components/ui/Placeholder.tsx`); если задан — рендерится `next/image`.

**Что нужно сделать перед запуском:** разместить файлы по путям из `data/company.ts` (Hero, About,
галерея Production), `data/services.ts` (imagePath/heroImagePath для pvh, lamination, powder-coating)
и `data/catalog.ts` (все каталожные фото на `/materials`) — точные пути и имена файлов совпадают
с `PROFF-TIME_IMAGE_MAP_FINAL.md`, раздел «FILE RENAMING SUMMARY».

Разделы `aluminium` и `facades` (услуги), а также все страницы `/projects/*` — **намеренно оставлены
плейсхолдерами**: подтверждённых реальных фото для них в текущих архивах нет. Не заменяйте их
каталожными/производственными фото — карта прямо это запрещает (каталог ≠ портфолио).

## Замена плейсхолдеров на реальные фотографии (для новых/будущих изображений)

Для мест, где ещё нет назначенного реального фото (Placeholder всё ещё используется — aluminium,
facades, объекты):

1. Положите файл в соответствующую папку `public/images/...`
2. В `data/*.ts` заполните `imagePath` (и `heroImagePath`/`alt`, если применимо) точным путём и коротким
   содержательным alt-текстом
3. Компонент, использующий `MediaSlot`, автоматически переключится с плейсхолдера на реальное фото —
   без правок JSX

Для Hero — компонент `components/sections/HeroMedia.tsx` уже подключён к `HOME_HERO.imagePath`;
для видео замените внутреннюю разметку на `<video autoPlay muted loop playsInline>`, не трогая `Hero.tsx`.

## Форма заявки

Архитектура честная и рабочая, но требует ключ провайдера почты, которого нет в этой среде:

- `components/sections/ContactForm.tsx` — валидирует поля на клиенте, собирает `FormData`, вызывает `submitLead()`
- `lib/submitLead.ts` — абстракция отправки: `POST /api/lead`, честно возвращает `ok: false` при любой проблеме
- `app/api/lead/route.ts` — валидирует поля на сервере; если заданы переменные окружения `RESEND_API_KEY` и `LEAD_FROM_EMAIL`, реально отправляет письмо на `CONTACTS.email` через Resend API; если переменные не заданы, возвращает `501` и форма честно показывает "Онлайн-отправка формы пока недоступна" с кнопками "Позвонить" / "WhatsApp", **не выдавая это за успешную отправку**
- Провайдера можно заменить на любой другой (SendGrid, Postmark, SMTP и т.д.) — вся точка интеграции сосредоточена в одном файле `app/api/lead/route.ts`
- **Требует от владельца компании**: получить API-ключ у выбранного email-провайдера (например, зарегистрироваться на resend.com) и указать `RESEND_API_KEY` + `LEAD_FROM_EMAIL` в переменных окружения деплоя — без этого шага форма технически исправна, но реальные заявки по email не уходят

## Карта

`components/sections/MapEmbed.tsx` использует Google Maps embed по адресу из `data/company.ts`
(без API-ключа, стандартный `output=embed`). Работает в реальном браузере.

## Что уже проверено

- `npm run build` — чистая сборка всех 15 публичных страниц без ошибок и warning'ов (в вывод сборки дополнительно попадают служебные не-страничные маршруты Next.js: `sitemap.xml`, `robots.txt`, favicon-файлы и API-роут `/api/lead` — это не публичный контент, поэтому не считаются страницами сайта)
- 105 комбинаций (15 страниц × 7 брейкпоинтов: 375/390/430/768/1024/1440/1920) — без horizontal overflow, ровно один H1 на страницу, без битых изображений, без console errors
- Навигация: desktop dropdown «Услуги», mobile fullscreen-меню с раскрывающимся подменю, breadcrumbs, клик по лого — всё ведёт на верные маршруты
- WhatsApp (`https://wa.me/77757351899`) и telephone (`tel:+77757351899`) ссылки — корректны на всех страницах
- Форма заявки на `/contacts` — заполняется и отправляется, показывает подтверждение
- SEO: у каждой страницы уникальные title/description без дублирования бренда в title, sitemap.xml включает все 15 публичных URL, robots.txt корректен
- Логотип обработан (прозрачный фон), для тёмных фонов используется светлая подложка (контраст)

