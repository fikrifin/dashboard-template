# 🎨 Dashboard Template

Template dashboard yang siap pakai untuk proyek Laravel dengan frontend modern menggunakan **Inertia.js** dan **React + TypeScript**. Dibangun dengan tujuan untuk mempercepat development dengan menyediakan komponen-komponen UI yang reusable dan sudah production-ready.

## 📖 Tentang Proyek Ini

Proyek ini adalah **boilerplate/template** yang dapat Anda gunakan sebagai fondasi untuk berbagai proyek dashboard yang membutuhkan:
- ✅ Autentikasi (login, register, forgot password)
- ✅ UI Dashboard yang modern dan responsive
- ✅ Komponen-komponen UI yang siap pakai
- ✅ Dark mode support
- ✅ Type safety dengan TypeScript
- ✅ Best practices Laravel & React

**Tujuan**: Satu template yang bisa di-copy dan dikustomisasi untuk berbagai proyek dashboard lainnya, sehingga tidak perlu membangun dari nol setiap kali membuat proyek baru.

---

## 🚀 Tech Stack

### Backend
- **Laravel 12** - Latest version dengan PHP 8.2+
- **Inertia.js** - Modern monolith architecture (no API needed)
- **Laravel Breeze** - Starter kit untuk autentikasi
- **Laravel Sanctum** - API token authentication
- **Ziggy** - Laravel routes in JavaScript

### Frontend
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 3** - Utility-first CSS framework
- **Heroicons** - Beautiful hand-crafted SVG icons
- **Headless UI** - Unstyled accessible UI components
- **Vite** - Lightning-fast build tool

---

## ✨ Fitur

### 🔐 Authentication
- Login & Register
- Email verification
- Password reset
- Profile management
- Logout functionality

### 🎨 UI Components
Semua komponen sudah mendukung **dark mode** dan **responsive design**:

#### Layout Components
- `DashboardLayout` - Main layout dengan sidebar & navbar
- `AuthenticatedLayout` - Layout untuk halaman authenticated
- `GuestLayout` - Layout untuk halaman guest (login, register)

#### Dashboard Components
- **Card** - Container dengan header, body, dan footer
- **StatCard** - Kartu statistik dengan icon dan perubahan persentase
- **Table** - Tabel data dengan custom render function
- **Button** - Berbagai variant button (primary, secondary, danger)
- **Input** - Text input dengan label dan error handling
- **Select** - Dropdown select dengan validation
- **Textarea** - Multi-line text input
- **Badge** - Label/tag dengan berbagai warna
- **Alert** - Notifikasi dan pesan
- **EmptyState** - Tampilan ketika tidak ada data

### 📄 Halaman yang Sudah Tersedia
- **Dashboard** (`/dashboard`) - Overview dengan stats cards dan tabel
- **Users** (`/users`) - List users dengan tabel
- **Settings** (`/settings`) - Halaman pengaturan
- **Profile** (`/profile`) - Edit profil user

### 🌗 Dark Mode
- Toggle antara light dan dark theme
- Persistensi preferensi user
- Semua komponen sudah mendukung dark mode

### 📱 Responsive Design
- Mobile-first approach
- Sidebar yang collapsible di mobile
- Grid system yang fleksibel

---

## 🛠️ Instalasi & Setup

### Prerequisites
- **PHP** >= 8.2
- **Composer** >= 2.0
- **Node.js** >= 18
- **NPM** atau **Yarn**
- **Database** (MySQL, PostgreSQL, atau SQLite)

### Quick Start

1. **Clone atau Copy Template**
```bash
git clone https://github.com/fikrifin/dashboard-template.git
cd dashboard-template
```

2. **Install Dependencies**
```bash
# Install PHP dependencies
composer install

# Install JavaScript dependencies
npm install --legacy-peer-deps
```

3. **Setup Environment**
```bash
# Copy file environment
cp .env.example .env

# Generate application key
php artisan key:generate
```

4. **Setup Database**

Edit file `.env` dan sesuaikan konfigurasi database:

```env
# Untuk SQLite (development)
DB_CONNECTION=sqlite

# Atau untuk MySQL
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nama_database
DB_USERNAME=username
DB_PASSWORD=password
```

Jika menggunakan SQLite, buat file database:
```bash
touch database/database.sqlite
```

5. **Run Migration**
```bash
php artisan migrate
```

6. **Build Assets**
```bash
# Development mode (dengan hot reload)
npm run dev

# Production build
npm run build
```

7. **Start Development Server**
```bash
# Option 1: Artisan serve
php artisan serve

# Option 2: Composer script (menjalankan server, queue, logs, dan vite)
composer dev
```

8. **Akses Aplikasi**

Buka browser dan akses: `http://localhost:8000`

---

## 📁 Struktur Proyek

```
dashboard-template/
├── app/
│   ├── Http/
│   │   ├── Controllers/      # Controller files
│   │   │   ├── ProfileController.php
│   │   │   └── UsersController.php
│   │   ├── Middleware/        # Custom middleware
│   │   └── Requests/          # Form requests
│   ├── Models/
│   │   └── User.php
│   └── Providers/
│       └── AppServiceProvider.php
│
├── resources/
│   ├── js/
│   │   ├── Components/
│   │   │   ├── Dashboard/     # Reusable dashboard components
│   │   │   │   ├── Alert.tsx
│   │   │   │   ├── Badge.tsx
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Card.tsx
│   │   │   │   ├── EmptyState.tsx
│   │   │   │   ├── Input.tsx
│   │   │   │   ├── Select.tsx
│   │   │   │   ├── StatCard.tsx
│   │   │   │   ├── Table.tsx
│   │   │   │   ├── Textarea.tsx
│   │   │   │   └── index.ts
│   │   │   └── ...            # Other components (Modal, Dropdown, etc.)
│   │   ├── Layouts/
│   │   │   ├── DashboardLayout.tsx      # Main dashboard layout
│   │   │   ├── AuthenticatedLayout.tsx   # Authenticated pages layout
│   │   │   └── GuestLayout.tsx          # Guest pages layout
│   │   ├── Pages/
│   │   │   ├── Auth/          # Authentication pages
│   │   │   ├── Profile/       # Profile pages
│   │   │   ├── Dashboard.tsx  # Main dashboard page
│   │   │   ├── Users.tsx      # Users management page
│   │   │   ├── Settings.tsx   # Settings page
│   │   │   └── Welcome.tsx    # Landing page
│   │   ├── types/             # TypeScript type definitions
│   │   ├── app.tsx           # Inertia app entry point
│   │   └── bootstrap.ts      # Bootstrap libraries
│   ├── css/
│   │   └── app.css           # Tailwind CSS
│   └── views/
│       └── app.blade.php     # Main blade template
│
├── routes/
│   ├── web.php               # Web routes
│   ├── auth.php              # Auth routes
│   └── console.php           # Console routes
│
├── database/
│   ├── migrations/           # Database migrations
│   ├── factories/            # Model factories
│   └── seeders/              # Database seeders
│
├── tests/                    # Test files
├── composer.json             # PHP dependencies
├── package.json              # JavaScript dependencies
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── vite.config.js            # Vite configuration
```

---

## 📚 Dokumentasi Lengkap

Untuk dokumentasi lebih detail, lihat:
- **[DASHBOARD_README.md](./DASHBOARD_README.md)** - Dokumentasi komponen dan cara penggunaan
- **[QUICK_START.md](./QUICK_START.md)** - Panduan cepat setup dan kustomisasi

---

## 🎯 Cara Menggunakan Template Ini

### 1. Untuk Proyek Baru

```bash
# Copy seluruh folder
cp -r dashboard-template nama-proyek-baru
cd nama-proyek-baru

# Update nama di composer.json dan package.json
# Kemudian install dependencies
composer install
npm install --legacy-peer-deps

# Setup dan jalankan
composer setup
```

### 2. Tambahkan ke Proyek Laravel Existing

Copy komponen yang diperlukan:

```bash
# Copy layout
cp resources/js/Layouts/DashboardLayout.tsx your-project/resources/js/Layouts/

# Copy dashboard components
cp -r resources/js/Components/Dashboard your-project/resources/js/Components/

# Install dependencies
cd your-project
npm install @heroicons/react --legacy-peer-deps
```

---

## 🎨 Kustomisasi

### Mengubah Warna Brand

Edit `tailwind.config.js`:

```js
export default {
    theme: {
        extend: {
            colors: {
                primary: colors.indigo, // Ganti dengan warna lain: blue, purple, green, dll
            }
        }
    }
}
```

### Menambah Menu Sidebar

Edit `resources/js/Layouts/DashboardLayout.tsx`:

```tsx
const navigation: MenuItem[] = [
    { name: 'Dashboard', href: route('dashboard'), icon: HomeIcon },
    { name: 'Users', href: route('users.index'), icon: UsersIcon },
    { name: 'Settings', href: route('settings.index'), icon: CogIcon },
    // Tambahkan menu baru di sini
    { name: 'Products', href: route('products.index'), icon: ShoppingBagIcon },
];
```

### Membuat Halaman Baru

1. Buat controller:
```bash
php artisan make:controller ProductController
```

2. Tambahkan route di `routes/web.php`:
```php
Route::middleware('auth')->group(function () {
    Route::get('/products', [ProductController::class, 'index'])->name('products.index');
});
```

3. Buat page component `resources/js/Pages/Products.tsx`:
```tsx
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Card, Table } from '@/Components/Dashboard';
import { Head } from '@inertiajs/react';

export default function Products({ products }) {
    return (
        <DashboardLayout header="Products">
            <Head title="Products" />
            
            <Card title="Product List">
                <Table columns={columns} data={products} />
            </Card>
        </DashboardLayout>
    );
}
```

4. Di controller, return Inertia response:
```php
use Inertia\Inertia;

public function index()
{
    return Inertia::render('Products', [
        'products' => Product::all()
    ]);
}
```

---

## 🧪 Testing

```bash
# Run all tests
php artisan test

# Run specific test
php artisan test --filter=ProfileTest

# Run with coverage
php artisan test --coverage
```

---

## 🚀 Deployment

### Build untuk Production

```bash
# Build assets
npm run build

# Optimize Laravel
php artisan optimize
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### Environment Variables

Pastikan set environment variables berikut di production:

```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://yourdomain.com

# Database
DB_CONNECTION=mysql
DB_HOST=your-db-host
DB_DATABASE=your-db-name
DB_USERNAME=your-db-user
DB_PASSWORD=your-db-pass
```

---

## 💡 Tips & Best Practices

1. **Gunakan TypeScript** - Manfaatkan type safety untuk menghindari bugs
2. **Komponen Reusable** - Buat komponen yang dapat digunakan ulang
3. **Inertia untuk Data Flow** - Gunakan Inertia props, hindari API calls manual
4. **Dark Mode** - Selalu test komponen di light dan dark mode
5. **Responsive** - Test di berbagai ukuran layar
6. **Git Workflow** - Gunakan branching untuk fitur baru
7. **Code Formatting** - Jalankan Pint untuk PHP dan Prettier untuk JS/TS

---

## 🤝 Contributing

Template ini dibuat untuk penggunaan pribadi, namun Anda bebas untuk:
- Fork dan modifikasi sesuai kebutuhan
- Submit issues jika menemukan bug
- Suggest improvements

---

## 📄 License

MIT License - Bebas digunakan untuk proyek pribadi maupun komersial.

---

## 📞 Support

Jika ada pertanyaan atau butuh bantuan:
- Buka issue di GitHub
- Lihat dokumentasi Laravel: https://laravel.com/docs
- Lihat dokumentasi Inertia.js: https://inertiajs.com
- Lihat dokumentasi React: https://react.dev

---

## 🙏 Credits

Template ini dibangun menggunakan:
- [Laravel](https://laravel.com) - Backend framework
- [Inertia.js](https://inertiajs.com) - Modern monolith
- [React](https://react.dev) - UI library
- [Tailwind CSS](https://tailwindcss.com) - CSS framework
- [Heroicons](https://heroicons.com) - Icon library
- [Laravel Breeze](https://laravel.com/docs/starter-kits) - Authentication scaffolding

---

**Happy Coding! 🎉**

Semoga template ini mempercepat development proyek dashboard Anda!
