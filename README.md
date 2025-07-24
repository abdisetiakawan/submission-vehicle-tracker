# Vehicle Tracker Dashboard

Proyek ini adalah aplikasi full-stack sederhana untuk memonitor status kendaraan, dibangun sebagai bagian dari  *take-home assignment* .

## 🚀 Tech Stack

* **Frontend** : Next.js, React, TypeScript, Zustand, Tailwind CSS
* **Backend** : Express.js, TypeScript
* **Database** : PostgreSQL
* **ORM** : Prisma
* **Autentikasi** : JWT (disimpan di httpOnly cookie)

---

## 🛠️ Instalasi & Menjalankan Proyek

Proyek ini menggunakan struktur monorepo. Semua perintah dijalankan dari direktori *root* proyek.

### 1. Backend Server (`vehicle-tracker-server`)

a. **Masuk ke direktori server:**

```bash
cd vehicle-tracker-server
```

b. **Install dependensi:**

```bash
npm install
```

c. **Setup Environment Variables:**

Buat file `.env` di dalam folder `vehicle-tracker-server` dan isi dengan format berikut:

```env
# Ganti dengan URL koneksi PostgreSQL Anda
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

# Ganti dengan secret key acak Anda
JWT_SECRET="YOUR_SUPER_SECRET_KEY"
```

d. **Jalankan Migrasi Prisma:**

Pastikan database Anda sudah berjalan, lalu jalankan perintah ini untuk membuat tabel.

```bash
npx prisma migrate dev
```

e. **(Opsional) Isi Data Awal (Seed):**

Untuk mengisi database dengan data kendaraan contoh, jalankan:

```bash
npm run prisma:seed
```

f. **Jalankan Backend Server:**

Server akan berjalan di http://localhost:3000.

```bash
npm run dev
```

### 2. Frontend Client (`vehicle-tracker-client`)

a. **Buka terminal baru, masuk ke direktori client:**

```bash
cd vehicle-tracker-client
```

b. **Install dependensi:**

```bash
npm install
```

c. **Setup Environment Variables:**

Buat file `.env.local` di dalam folder `vehicle-tracker-client` dan isi dengan:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

d. **Jalankan Frontend Server:**

Aplikasi Next.js akan berjalan di http://localhost:3001.

```bash
npm run dev
```

---

## 📋 Prisma ORM

Berikut adalah perintah-perintah Prisma yang penting:

* **Menjalankan migrasi database:**
  ```bash
  npx prisma migrate dev
  ```
* **Membuka Prisma Studio (GUI untuk melihat database):**
  ```bash
  npx prisma studio
  ```
* **Mengisi data awal (seeding):**
  ```bash
  npm run prisma:seed
  ```

---

## 🗺️ Rute API

Semua rute API berada di bawah *base path* `/api`.

### Autentikasi

* `POST /auth/register`: Membuat akun baru
* `POST /auth/login`: Login dan mendapatkan *auth cookie*
* `POST /auth/logout`: Logout dan menghapus *auth cookie*
* `GET /auth/me`: (Terproteksi) Mendapatkan data pengguna yang sedang login

### Kendaraan (Terproteksi)

* `GET /vehicles`: Mendapatkan daftar semua kendaraan
* `GET /vehicles/:id`: Mendapatkan detail satu kendaraan berdasarkan ID

---

## 📱 Fitur Aplikasi

* Autentikasi pengguna dengan JWT cookies
* Dashboard monitoring kendaraan
* Real-time status tracking
* Interface yang responsif dengan Tailwind CSS
* State management dengan Zustand

## 🔧 Development

Untuk development, pastikan kedua server (backend dan frontend) berjalan secara bersamaan di terminal yang berbeda.

## 📄 Lisensi

Proyek ini dibuat untuk keperluan  *take-home assignment* .
