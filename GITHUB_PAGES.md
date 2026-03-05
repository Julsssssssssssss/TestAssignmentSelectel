# Публикация на GitHub Pages — пошагово

## Что уже сделано в проекте

- Добавлен workflow `.github/workflows/deploy-pages.yml`: при пуше в `main` приложение из папки `webclient` собирается и публикуется на GitHub Pages.
- Сборка идёт с базовым путём `/TestAssignmentSelectel/`, поэтому сайт открывается по адресу репозитория.

---

## Что сделать тебе

### Шаг 1. Настроить источник публикации

1. Открой настройки Pages репозитория:  
   **https://github.com/Julsssssssssssss/TestAssignmentSelectel/settings/pages**
2. В блоке **Build and deployment** в поле **Source** выбери **GitHub Actions** (не «Deploy from a branch»).
3. При необходимости нажми **Save**.

### Шаг 2. Залить изменения на GitHub

Убедись, что в репозитории есть файл workflow и он запушен в `main`:

- В корне репозитория должна быть папка **`.github/workflows/`** и в ней файл **`deploy-pages.yml`**.

Если ты правишь проект локально:

```bash
cd путь\к\TestAssignmentSelectel
git add .
git status
git commit -m "Add GitHub Pages deploy"
git push origin main
```

### Шаг 3. Дождаться деплоя

1. Открой вкладку **Actions** в репозитории на GitHub.
2. Должен запуститься workflow **«Deploy to GitHub Pages»**.
3. Дождись зелёной галочки (обычно 1–3 минуты).

### Шаг 4. Открыть сайт

Сайт будет доступен по адресу:

**https://julsssssssssssss.github.io/TestAssignmentSelectel/**

---

## Дальше

При каждом новом пуше в ветку **main** сайт будет автоматически пересобираться и обновляться.
