# Quick Start Guide - Dashboard Template

## 🚀 Setup Cepat

### 1. Copy Template ke Proyek Baru

```bash
# Option 1: Copy seluruh folder
cp -r dashboard-template nama-proyek-baru
cd nama-proyek-baru

# Option 2: Jika sudah ada proyek Laravel, copy hanya komponen yang diperlukan
```

### 2. Install Dependencies

```bash
composer install
npm install --legacy-peer-deps
```

### 3. Setup Environment

```bash
cp .env.example .env
php artisan key:generate
```

Edit `.env` untuk database:
```env
DB_CONNECTION=sqlite
# Atau MySQL/PostgreSQL
```

### 4. Migrate Database

```bash
php artisan migrate
```

### 5. Build Assets

```bash
npm run dev
# Atau untuk production:
# npm run build
```

### 6. Run Server

```bash
php artisan serve
```

Buka: http://localhost:8000

---

## 📂 Copy Komponen ke Proyek Existing

Jika Anda sudah punya proyek Laravel dan ingin menambahkan dashboard template ini:

### Copy Layout

```bash
cp resources/js/Layouts/DashboardLayout.tsx your-project/resources/js/Layouts/
```

### Copy Components

```bash
cp -r resources/js/Components/Dashboard your-project/resources/js/Components/
```

### Install Heroicons

```bash
cd your-project
npm install @heroicons/react --legacy-peer-deps
```

### Update Routes (Optional)

Salin contoh route dari `routes/web.php` ke proyek Anda.

---

## 🎨 Komponen yang Tersedia

### Layouts
- **DashboardLayout** - Layout utama dengan sidebar & navbar

### UI Components
- **Card** - Container konten dengan header & footer
- **StatCard** - Kartu statistik dengan icon
- **Table** - Tabel data dengan custom render
- **Button** - Tombol dengan berbagai variant
- **Badge** - Label/tag dengan warna
- **Alert** - Notifikasi/peringatan
- **EmptyState** - Tampilan kosong dengan action

### Form Components
- **Input** - Text input dengan label & error
- **Select** - Dropdown select
- **Textarea** - Text area input

---

## 📄 Contoh Penggunaan

### Basic Dashboard Page

```tsx
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Card, StatCard } from '@/Components/Dashboard';
import { UsersIcon } from '@heroicons/react/24/outline';
import { Head } from '@inertiajs/react';

export default function MyPage() {
    return (
        <DashboardLayout header="My Page">
            <Head title="My Page" />
            
            <StatCard
                title="Total Users"
                value="1,234"
                icon={UsersIcon}
                iconColor="bg-blue-500"
                change="+12%"
                changeType="increase"
            />
            
            <Card title="Content">
                Your content here
            </Card>
        </DashboardLayout>
    );
}
```

### Form Page

```tsx
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Card, Button, Input, Select } from '@/Components/Dashboard';
import { useForm } from '@inertiajs/react';

export default function FormPage() {
    const { data, setData, post, errors } = useForm({
        name: '',
        email: '',
    });

    return (
        <DashboardLayout header="Form">
            <Card title="User Form">
                <form onSubmit={(e) => { e.preventDefault(); post('/save'); }}>
                    <Input
                        label="Name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        error={errors.name}
                        required
                    />
                    
                    <Button type="submit">Save</Button>
                </form>
            </Card>
        </DashboardLayout>
    );
}
```

---

## 🔧 Kustomisasi

### Mengubah Warna Brand

Edit `tailwind.config.js`:

```js
theme: {
    extend: {
        colors: {
            primary: colors.indigo, // Ganti dengan warna lain
        }
    }
}
```

### Menambah Menu

Edit `resources/js/Layouts/DashboardLayout.tsx`:

```tsx
const navigation: MenuItem[] = [
    { name: 'Dashboard', href: route('dashboard'), icon: HomeIcon },
    { name: 'Menu Baru', href: route('new.menu'), icon: YourIcon },
    // ...
];
```

### Modifikasi Komponen

Semua komponen bisa di-customize sesuai kebutuhan:

```bash
# Edit langsung file komponennya
resources/js/Components/Dashboard/Card.tsx
resources/js/Components/Dashboard/StatCard.tsx
# dll
```

---

## 🎯 Tips Development

### 1. Hot Reload Development

```bash
npm run dev
```

File akan auto-compile saat ada perubahan.

### 2. TypeScript Check

```bash
npx tsc --noEmit
```

### 3. Format Code

```bash
# PHP
./vendor/bin/pint

# JavaScript/TypeScript
npm run format
```

### 4. Clear Cache

```bash
php artisan optimize:clear
npm run build
```

---

## 📝 Contoh Pages

Template ini sudah include 3 contoh halaman lengkap:

1. **Dashboard** (`/dashboard`) - Overview dengan stats & charts
2. **Users** (`/users`) - List users dengan table
3. **Settings** (`/settings`) - Form settings dengan validation

Lihat source code di `resources/js/Pages/` untuk referensi.

---

## 🐛 Troubleshooting

### NPM Install Error (peer deps conflict)

```bash
npm install --legacy-peer-deps
```

### Vite Build Error

```bash
rm -rf node_modules
npm install --legacy-peer-deps
npm run build
```

### Route Not Found

Pastikan route sudah didefinisi di `routes/web.php` dan sudah di-group dalam middleware `auth`.

### Component Not Found

Pastikan import path benar:
```tsx
import { Card } from '@/Components/Dashboard';
```

Bukan:
```tsx
import Card from '@/Components/Dashboard/Card'; // ❌
```

---

## 📚 Resources

- [Laravel Docs](https://laravel.com/docs)
- [Inertia.js Docs](https://inertiajs.com)
- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com)
- [Heroicons](https://heroicons.com)

---

## ✅ Checklist Setup Proyek Baru

- [ ] Copy template / install Breeze
- [ ] Install dependencies
- [ ] Setup .env
- [ ] Migrate database
- [ ] Build assets
- [ ] Test login
- [ ] Customize menu
- [ ] Ubah branding (logo, warna, dll)
- [ ] Tambah halaman sesuai kebutuhan
- [ ] Setup production server

---

Selamat coding! 🎉
