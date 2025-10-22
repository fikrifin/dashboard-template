# Dashboard Template - Laravel + Inertia.js + React + TypeScript

Dashboard template yang reusable untuk berbagai proyek Laravel dengan Inertia.js sebagai frontend.

## 🚀 Fitur

- **Laravel 12** - Framework PHP terbaru
- **Inertia.js** - Modern monolith architecture
- **React + TypeScript** - Type-safe frontend
- **Tailwind CSS** - Utility-first CSS framework
- **Dark Mode Support** - Toggle dark/light theme
- **Responsive Design** - Mobile-first approach
- **Reusable Components** - Modular dashboard components

## 📦 Komponen Dashboard

### Layouts

#### `DashboardLayout`
Layout utama untuk halaman dashboard dengan sidebar dan navbar.

```tsx
import DashboardLayout from '@/Layouts/DashboardLayout';

<DashboardLayout header="Page Title">
    {/* Your content */}
</DashboardLayout>
```

### Components

#### `Card`
Komponen card yang fleksibel untuk menampilkan konten.

```tsx
import { Card } from '@/Components/Dashboard';

<Card 
    title="Card Title"
    subtitle="Card subtitle"
    actions={<button>Action</button>}
    footer={<div>Footer content</div>}
>
    Card content here
</Card>
```

#### `StatCard`
Komponen untuk menampilkan statistik dengan icon.

```tsx
import { StatCard } from '@/Components/Dashboard';
import { UsersIcon } from '@heroicons/react/24/outline';

<StatCard
    title="Total Users"
    value="1,234"
    icon={UsersIcon}
    iconColor="bg-blue-500"
    change="+12.5%"
    changeType="increase"
    subtitle="vs last month"
/>
```

#### `Table`
Komponen tabel dengan custom rendering.

```tsx
import { Table } from '@/Components/Dashboard';

const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    {
        key: 'status',
        label: 'Status',
        render: (value) => <span className="badge">{value}</span>
    }
];

const data = [
    { id: 1, name: 'Item 1', status: 'Active' },
    { id: 2, name: 'Item 2', status: 'Inactive' }
];

<Table columns={columns} data={data} />
```

## 🛠️ Installation

### Prerequisites
- PHP >= 8.2
- Composer
- Node.js >= 18
- NPM atau Yarn

### Setup

1. Clone atau copy folder ini ke proyek baru Anda

2. Install dependencies:
```bash
composer install
npm install --legacy-peer-deps
```

3. Setup environment:
```bash
cp .env.example .env
php artisan key:generate
```

4. Setup database di `.env`:
```env
DB_CONNECTION=sqlite
# atau gunakan MySQL/PostgreSQL
# DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=your_database
# DB_USERNAME=your_username
# DB_PASSWORD=your_password
```

5. Run migrations:
```bash
php artisan migrate
```

6. Build assets:
```bash
npm run dev
```

7. Run development server:
```bash
php artisan serve
```

Buka `http://localhost:8000` di browser Anda.

## 📁 Struktur File

```
dashboard-template/
├── app/
│   └── Http/
│       └── Controllers/     # Controllers
├── resources/
│   └── js/
│       ├── Components/
│       │   └── Dashboard/   # Dashboard components
│       │       ├── Card.tsx
│       │       ├── StatCard.tsx
│       │       ├── Table.tsx
│       │       └── index.ts
│       ├── Layouts/
│       │   └── DashboardLayout.tsx
│       └── Pages/
│           └── Dashboard.tsx
├── routes/
│   └── web.php             # Routes
└── database/
    └── migrations/         # Database migrations
```

## 🎨 Kustomisasi

### Menambah Menu Sidebar

Edit file `resources/js/Layouts/DashboardLayout.tsx`:

```tsx
const navigation: MenuItem[] = [
    { name: 'Dashboard', href: route('dashboard'), icon: HomeIcon },
    { name: 'Analytics', href: route('analytics'), icon: ChartBarIcon },
    { name: 'Users', href: route('users'), icon: UsersIcon },
    { name: 'Settings', href: route('settings'), icon: CogIcon },
    // Tambahkan menu baru di sini
];
```

### Mengubah Warna Tema

Edit file `tailwind.config.js` untuk mengubah color palette sesuai kebutuhan:

```js
module.exports = {
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eff6ff',
                    // ... custom colors
                }
            }
        }
    }
}
```

### Menambah Komponen Baru

Buat komponen baru di `resources/js/Components/Dashboard/`:

```tsx
// YourComponent.tsx
export default function YourComponent({ ...props }) {
    return (
        <div>
            {/* Your component */}
        </div>
    );
}
```

Jangan lupa export di `index.ts`:

```tsx
export { default as YourComponent } from './YourComponent';
```

## 🔧 Development

### Build untuk production:
```bash
npm run build
```

### Format code:
```bash
./vendor/bin/pint
npm run format
```

### Run tests:
```bash
php artisan test
```

## 📝 Membuat Halaman Dashboard Baru

1. Buat controller:
```bash
php artisan make:controller YourController
```

2. Buat route di `routes/web.php`:
```php
Route::middleware(['auth'])->group(function () {
    Route::get('/your-page', [YourController::class, 'index'])->name('your.page');
});
```

3. Buat page component di `resources/js/Pages/YourPage.tsx`:
```tsx
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Card } from '@/Components/Dashboard';
import { Head } from '@inertiajs/react';

export default function YourPage() {
    return (
        <DashboardLayout header="Your Page Title">
            <Head title="Your Page" />
            
            <Card title="Your Content">
                {/* Your content here */}
            </Card>
        </DashboardLayout>
    );
}
```

4. Di controller, return Inertia page:
```php
use Inertia\Inertia;

public function index()
{
    return Inertia::render('YourPage', [
        'data' => YourModel::all()
    ]);
}
```

## 🎯 Best Practices

1. **Gunakan TypeScript** untuk type safety
2. **Pisahkan logic dari UI** - buat custom hooks jika diperlukan
3. **Gunakan Inertia untuk routing** - hindari API calls manual
4. **Buat komponen reusable** - DRY principle
5. **Ikuti struktur folder** yang ada untuk konsistensi

## 📚 Resources

- [Laravel Documentation](https://laravel.com/docs)
- [Inertia.js Documentation](https://inertiajs.com/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/)

## 🤝 Contributing

Template ini dibuat untuk penggunaan pribadi, namun Anda bebas untuk memodifikasi sesuai kebutuhan proyek Anda.

## 📄 License

MIT License - Bebas digunakan untuk proyek pribadi maupun komersial.

## 🎉 Tips

### Dark Mode Toggle
Untuk menambahkan toggle dark mode, buat komponen:

```tsx
import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export default function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
        </button>
    );
}
```

### Loading State
Gunakan Inertia's progress indicator:

```tsx
import { router } from '@inertiajs/react';

// Di component
const handleSubmit = () => {
    router.post('/your-endpoint', data, {
        onSuccess: () => {
            // Success callback
        },
        onError: () => {
            // Error callback
        }
    });
};
```

### Flash Messages
Tampilkan pesan flash dari Laravel:

```php
// Di controller
return redirect()->route('dashboard')->with('success', 'Data berhasil disimpan!');
```

```tsx
// Di component
import { usePage } from '@inertiajs/react';

const { flash } = usePage().props;

{flash.success && (
    <div className="alert alert-success">
        {flash.success}
    </div>
)}
```

---

Happy coding! 🚀
