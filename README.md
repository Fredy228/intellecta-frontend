Проект Intellecta на [Next.js](https://nextjs.org/) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1. Створити .env файл в корні проекту

```bash
NEXT_URL='URL where this project is running, it is usually http://localhost:3000'
SERVER_URL='URL where the server is running'
SERVER_WEBSOCKET='URL where the websocket-server is running'

```

2. Запуск проекту

В режимі продакшн
```bash
npm run build

npm start
```
В режимі розробці
```bash
npm run dev
```

## Project structure

root:
- `public`:
    - img (медіа файли проекту)
  
- `src`:
    - `app` (маршрути додатку):
        - `api`:
          - `auth` (маршрут аунтифікації)
        - `dashboard` (маршрути залогіненого користувача)
        - `sign-in` (маршрут логонізації)
      
    - `axios`:
      - `base.ts` (базове налаштування axios)
      - `...інші.ts` (API запити на сервер)
      
    - `components` (компоненти додатку):
      - `layout` (головний layout для залогіненого користувача)
      - `providers` (провайдери додатку)
      - `reused` (компоненти які можна перевикористовувати багато разів)
      - `screens` (скріни які будуть відображатися безпосередньо на маршруті)
      - `ui` (ui компоненти з яких складається screen)
      
    - `configs` (конфіги додатку)
  
    - `enums` (enum для typescript)
  
    - `fonts` (шрифти додатку)
  
    - `interfaces` (interfaces для typescript)
  
    - `redux` (redux - глобальний стан)
  
    - `services` (інші сервіси для додатку)
  
    - `styles` (головні стилі для додатку)
  
    - `types` (types для typescript)
