# Portfolio API Documentation

## Tổng quan

API này cung cấp các endpoints để quản lý portfolio bao gồm: danh mục bài viết (Article Categories), bài viết (Articles), dự án (Projects), và kinh nghiệm làm việc (Work Experiences).

**Base URL**: `/admin`

**Authentication**: Tất cả các endpoints yêu cầu JWT Authentication thông qua header `Authorization: Bearer <token>`

---

## Cấu trúc Response chung

### Success Response

```typescript
{
  statusCode: number,      // HTTP status code
  message: string,         // Thông báo
  data?: T                 // Dữ liệu trả về (optional)
}
```

### Pagination Response

Các endpoint GET list sẽ trả về dữ liệu với cấu trúc pagination:

```typescript
{
  statusCode: 200,
  message: "Success",
  data: {
    result: T[],           // Mảng dữ liệu
    meta: {
      page: number,        // Trang hiện tại
      limit: number,       // Số bản ghi mỗi trang
      total: number,       // Tổng số bản ghi
      totalPages: number,  // Tổng số trang
      q?: string          // Query search (nếu có)
    }
  }
}
```

### Base Entity Fields

Tất cả entities đều kế thừa các trường sau:

```typescript
{
  id: number,              // ID tự động tăng
  createdAt: Date,         // Thời gian tạo
  updatedAt: Date,         // Thời gian cập nhật
  isRemoved: boolean       // Đánh dấu đã xóa (soft delete)
}
```

---

## 1. Article Categories Management

### 1.1. Lấy danh sách danh mục bài viết

**Endpoint**: `GET /admin/article-categories`

**Mô tả**: Lấy danh sách tất cả các danh mục bài viết với phân trang

**Query Parameters**:

```typescript
{
  page: number,    // Số trang (bắt đầu từ 1)
  limit: number    // Số bản ghi mỗi trang
}
```

**Response**:

```typescript
{
  statusCode: 200,
  message: "Success",
  data: {
    result: [
      {
        id: number,
        title: string,          // Tên danh mục bài viết
        slug: string,           // Đường dẫn thân thiện (unique)
        description: string,    // Mô tả
        sortOrder: number,      // Thứ tự sắp xếp
        isActive: boolean,      // Trạng thái kích hoạt
        createdAt: Date,
        updatedAt: Date,
        isRemoved: boolean
      }
    ],
    meta: {
      page: number,
      limit: number,
      total: number,
      totalPages: number
    }
  }
}
```

**Example**:

```bash
GET /admin/article-categories?page=1&limit=10
```

---

### 1.2. Tạo danh mục bài viết mới

**Endpoint**: `POST /admin/article-categories`

**Mô tả**: Tạo một danh mục bài viết mới

**Request Body**:

```typescript
{
  title: string,          // Tên danh mục bài viết (required)
  slug: string,           // Đường dẫn thân thiện (required, unique)
  description: string,    // Mô tả (required)
  sortOrder: number,      // Thứ tự sắp xếp (required)
  isActive: boolean       // Trạng thái kích hoạt (required)
}
```

**Response**:

```typescript
{
  statusCode: 201,
  message: "Success",
  data: {
    id: number,
    title: string,
    slug: string,
    description: string,
    sortOrder: number,
    isActive: boolean,
    createdAt: Date,
    updatedAt: Date,
    isRemoved: boolean
  }
}
```

**Example**:

```json
POST /admin/article-categories
{
  "title": "Web Development",
  "slug": "web-development",
  "description": "Các bài viết về phát triển web",
  "sortOrder": 1,
  "isActive": true
}
```

---

### 1.3. Cập nhật danh mục bài viết

**Endpoint**: `PUT /admin/article-categories/:id`

**Mô tả**: Cập nhật thông tin danh mục bài viết theo ID

**URL Parameters**:

- `id` (number): ID của danh mục bài viết cần cập nhật

**Request Body** (tất cả fields đều optional):

```typescript
{
  title?: string,
  slug?: string,
  description?: string,
  sortOrder?: number,
  isActive?: boolean
}
```

**Response**:

```typescript
{
  statusCode: 200,
  message: "Success",
  data: {
    id: number,
    title: string,
    slug: string,
    description: string,
    sortOrder: number,
    isActive: boolean,
    createdAt: Date,
    updatedAt: Date,
    isRemoved: boolean
  }
}
```

**Example**:

```json
PUT /admin/article-categories/1
{
  "title": "Web Development Updated",
  "isActive": false
}
```

---

### 1.4. Xóa danh mục bài viết

**Endpoint**: `DELETE /admin/article-categories/:id`

**Mô tả**: Xóa danh mục bài viết theo ID (soft delete)

**URL Parameters**:

- `id` (number): ID của danh mục bài viết cần xóa

**Response**:

```typescript
{
  statusCode: 200,
  message: "Success"
}
```

**Example**:

```bash
DELETE /admin/article-categories/1
```

---

## 2. Articles Management

### 2.1. Lấy danh sách bài viết

**Endpoint**: `GET /admin/articles`

**Mô tả**: Lấy danh sách tất cả các bài viết với phân trang

**Query Parameters**:

```typescript
{
  page: number,    // Số trang
  limit: number    // Số bản ghi mỗi trang
}
```

**Response**:

```typescript
{
  statusCode: 200,
  message: "Success",
  data: {
    result: [
      {
        id: number,
        title: string,           // Tên bài viết (unique)
        slug: string,            // Đường dẫn thân thiện (unique)
        description: string,     // Mô tả (unique)
        content: string,         // Nội dung bài viết
        isDraft: boolean,        // Trạng thái bản nháp
        publishedAt: Date | null, // Thời gian xuất bản
        authorId: number,        // ID tác giả
        categoryId: number,      // ID danh mục bài viết
        createdAt: Date,
        updatedAt: Date,
        isRemoved: boolean
      }
    ],
    meta: {
      page: number,
      limit: number,
      total: number,
      totalPages: number
    }
  }
}
```

**Example**:

```bash
GET /admin/articles?page=1&limit=10
```

---

### 2.2. Tạo bài viết mới

**Endpoint**: `POST /admin/articles`

**Mô tả**: Tạo một bài viết mới

**Request Body**:

```typescript
{
  title: string,              // Tên bài viết (required, unique)
  slug: string,               // Đường dẫn thân thiện (required, unique)
  description: string,        // Mô tả (required)
  content: string,            // Nội dung bài viết (required)
  isDraft: boolean,           // Trạng thái bản nháp (required)
  publishedAt: Date | null,   // Thời gian xuất bản (required)
  authorId: number,           // ID tác giả (required)
  categoryId: number          // ID danh mục bài viết (required)
}
```

**Response**:

```typescript
{
  statusCode: 201,
  message: "Success",
  data: {
    id: number,
    title: string,
    slug: string,
    description: string,
    content: string,
    isDraft: boolean,
    publishedAt: Date | null,
    authorId: number,
    categoryId: number,
    createdAt: Date,
    updatedAt: Date,
    isRemoved: boolean
  }
}
```

**Example**:

```json
POST /admin/articles
{
  "title": "Getting Started with NestJS",
  "slug": "getting-started-with-nestjs",
  "description": "Hướng dẫn bắt đầu với NestJS framework",
  "content": "NestJS là một framework...",
  "isDraft": false,
  "publishedAt": "2026-02-23T10:00:00Z",
  "authorId": 1,
  "categoryId": 1
}
```

---

### 2.3. Cập nhật bài viết

**Endpoint**: `PUT /admin/articles/:id`

**Mô tả**: Cập nhật thông tin bài viết theo ID

**URL Parameters**:

- `id` (number): ID của bài viết cần cập nhật

**Request Body** (tất cả fields đều optional):

```typescript
{
  title?: string,
  slug?: string,
  description?: string,
  content?: string,
  isDraft?: boolean,
  publishedAt?: Date | null,
  authorId?: number,
  categoryId?: number
}
```

**Response**:

```typescript
{
  statusCode: 200,
  message: "Success",
  data: {
    id: number,
    title: string,
    slug: string,
    description: string,
    content: string,
    isDraft: boolean,
    publishedAt: Date | null,
    authorId: number,
    categoryId: number,
    createdAt: Date,
    updatedAt: Date,
    isRemoved: boolean
  }
}
```

**Example**:

```json
PUT /admin/articles/1
{
  "isDraft": true,
  "content": "Updated content..."
}
```

---

### 2.4. Xóa bài viết

**Endpoint**: `DELETE /admin/articles/:id`

**Mô tả**: Xóa bài viết theo ID (soft delete)

**URL Parameters**:

- `id` (number): ID của bài viết cần xóa

**Response**:

```typescript
{
  statusCode: 200,
  message: "Success"
}
```

**Example**:

```bash
DELETE /admin/articles/1
```

---

## 3. Projects Management

### 3.1. Lấy danh sách dự án

**Endpoint**: `GET /admin/projects`

**Mô tả**: Lấy danh sách tất cả các dự án với phân trang

**Query Parameters**:

```typescript
{
  page: number,    // Số trang
  limit: number    // Số bản ghi mỗi trang
}
```

**Response**:

```typescript
{
  statusCode: 200,
  message: "Success",
  data: {
    result: [
      {
        id: number,
        title: string,              // Tên dự án
        thumbnailUrl: string,       // URL ảnh đại diện
        description: string,        // Mô tả dự án
        repoUrl: string | null,     // URL repository
        previewUrl: string | null,  // URL xem trước dự án
        technologies: string,       // Công nghệ sử dụng (phân tách bằng dấu phẩy)
        createdAt: Date,
        updatedAt: Date,
        isRemoved: boolean
      }
    ],
    meta: {
      page: number,
      limit: number,
      total: number,
      totalPages: number
    }
  }
}
```

**Example**:

```bash
GET /admin/projects?page=1&limit=10
```

---

### 3.2. Tạo dự án mới

**Endpoint**: `POST /admin/projects`

**Mô tả**: Tạo một dự án mới

**Request Body**:

```typescript
{
  title: string,              // Tên dự án (required)
  thumbnailUrl: string,       // URL ảnh đại diện (required)
  description: string,        // Mô tả dự án (required)
  repoUrl: string | null,     // URL repository (required, có thể null)
  previewUrl: string | null,  // URL xem trước (required, có thể null)
  technologies: string        // Công nghệ (required, phân tách bằng dấu phẩy)
}
```

**Response**:

```typescript
{
  statusCode: 201,
  message: "Success",
  data: {
    id: number,
    title: string,
    thumbnailUrl: string,
    description: string,
    repoUrl: string | null,
    previewUrl: string | null,
    technologies: string,
    createdAt: Date,
    updatedAt: Date,
    isRemoved: boolean
  }
}
```

**Example**:

```json
POST /admin/projects
{
  "title": "Portfolio Website",
  "thumbnailUrl": "https://example.com/portfolio.jpg",
  "description": "Website portfolio cá nhân",
  "repoUrl": "https://github.com/username/portfolio",
  "previewUrl": "https://portfolio.example.com",
  "technologies": "React,TypeScript,TailwindCSS"
}
```

---

### 3.3. Cập nhật dự án

**Endpoint**: `PUT /admin/projects/:id`

**Mô tả**: Cập nhật thông tin dự án theo ID

**URL Parameters**:

- `id` (number): ID của dự án cần cập nhật

**Request Body** (tất cả fields đều optional):

```typescript
{
  title?: string,
  thumbnailUrl?: string,
  description?: string,
  repoUrl?: string | null,
  previewUrl?: string | null,
  technologies?: string
}
```

**Response**:

```typescript
{
  statusCode: 200,
  message: "Success",
  data: {
    id: number,
    title: string,
    thumbnailUrl: string,
    description: string,
    repoUrl: string | null,
    previewUrl: string | null,
    technologies: string,
    createdAt: Date,
    updatedAt: Date,
    isRemoved: boolean
  }
}
```

**Example**:

```json
PUT /admin/projects/1
{
  "description": "Updated description",
  "technologies": "React,TypeScript,TailwindCSS,NextJS"
}
```

---

### 3.4. Xóa dự án

**Endpoint**: `DELETE /admin/projects/:id`

**Mô tả**: Xóa dự án theo ID (soft delete)

**URL Parameters**:

- `id` (number): ID của dự án cần xóa

**Response**:

```typescript
{
  statusCode: 200,
  message: "Success"
}
```

**Example**:

```bash
DELETE /admin/projects/1
```

---

## 4. Work Experiences Management

### 4.1. Lấy danh sách kinh nghiệm làm việc

**Endpoint**: `GET /admin/work-exps`

**Mô tả**: Lấy danh sách tất cả các kinh nghiệm làm việc với phân trang

**Query Parameters**:

```typescript
{
  page: number,    // Số trang
  limit: number    // Số bản ghi mỗi trang
}
```

**Response**:

```typescript
{
  statusCode: 200,
  message: "Success",
  data: {
    result: [
      {
        id: number,
        companyName: string,        // Tên công ty
        position: string,           // Vị trí công việc
        startDate: Date,            // Ngày bắt đầu làm việc
        endDate: Date | null,       // Ngày kết thúc (null nếu đang làm)
        description: string,        // Mô tả công việc
        isCurrent: boolean,         // Có đang làm việc tại đây không
        technologies: string,       // Công nghệ sử dụng (phân tách bằng dấu phẩy)
        createdAt: Date,
        updatedAt: Date,
        isRemoved: boolean
      }
    ],
    meta: {
      page: number,
      limit: number,
      total: number,
      totalPages: number
    }
  }
}
```

**Example**:

```bash
GET /admin/work-exps?page=1&limit=10
```

---

### 4.2. Tạo kinh nghiệm làm việc mới

**Endpoint**: `POST /admin/work-exps`

**Mô tả**: Tạo một kinh nghiệm làm việc mới

**Request Body**:

```typescript
{
  companyName: string,        // Tên công ty (required)
  position: string,           // Vị trí công việc (required)
  startDate: Date,            // Ngày bắt đầu (required)
  endDate: Date | null,       // Ngày kết thúc (required, có thể null)
  description: string,        // Mô tả công việc (required)
  isCurrent: boolean,         // Đang làm việc (required)
  technologies: string        // Công nghệ (required, phân tách bằng dấu phẩy)
}
```

**Response**:

```typescript
{
  statusCode: 201,
  message: "Success",
  data: {
    id: number,
    companyName: string,
    position: string,
    startDate: Date,
    endDate: Date | null,
    description: string,
    isCurrent: boolean,
    technologies: string,
    createdAt: Date,
    updatedAt: Date,
    isRemoved: boolean
  }
}
```

**Example**:

```json
POST /admin/work-exps
{
  "companyName": "Tech Company Ltd",
  "position": "Senior Backend Developer",
  "startDate": "2024-01-15",
  "endDate": null,
  "description": "Phát triển và bảo trì hệ thống backend",
  "isCurrent": true,
  "technologies": "NestJS,PostgreSQL,Redis,Docker"
}
```

---

### 4.3. Cập nhật kinh nghiệm làm việc

**Endpoint**: `PUT /admin/work-exps/:id`

**Mô tả**: Cập nhật thông tin kinh nghiệm làm việc theo ID

**URL Parameters**:

- `id` (number): ID của kinh nghiệm làm việc cần cập nhật

**Request Body** (tất cả fields đều optional):

```typescript
{
  companyName?: string,
  position?: string,
  startDate?: Date,
  endDate?: Date | null,
  description?: string,
  isCurrent?: boolean,
  technologies?: string
}
```

**Response**:

```typescript
{
  statusCode: 200,
  message: "Success",
  data: {
    id: number,
    companyName: string,
    position: string,
    startDate: Date,
    endDate: Date | null,
    description: string,
    isCurrent: boolean,
    technologies: string,
    createdAt: Date,
    updatedAt: Date,
    isRemoved: boolean
  }
}
```

**Example**:

```json
PUT /admin/work-exps/1
{
  "position": "Lead Backend Developer",
  "isCurrent": false,
  "endDate": "2026-02-20"
}
```

---

### 4.4. Xóa kinh nghiệm làm việc

**Endpoint**: `DELETE /admin/work-exps/:id`

**Mô tả**: Xóa kinh nghiệm làm việc theo ID (soft delete)

**URL Parameters**:

- `id` (number): ID của kinh nghiệm làm việc cần xóa

**Response**:

```typescript
{
  statusCode: 200,
  message: "Success"
}
```

**Example**:

```bash
DELETE /admin/work-exps/1
```

---

## Error Responses

Khi có lỗi xảy ra, API sẽ trả về response với format:

```typescript
{
  statusCode: number,      // HTTP error status code (400, 401, 404, 500,...)
  message: string,         // Thông báo lỗi
  error?: string          // Chi tiết lỗi (optional)
}
```

### Common Error Codes

- **400 Bad Request**: Dữ liệu request không hợp lệ
- **401 Unauthorized**: Chưa đăng nhập hoặc token không hợp lệ
- **403 Forbidden**: Không có quyền truy cập
- **404 Not Found**: Không tìm thấy tài nguyên
- **500 Internal Server Error**: Lỗi server

---

## Notes

1. **Authentication**: Tất cả endpoints cần JWT token trong header `Authorization: Bearer <token>`
2. **Soft Delete**: Các endpoint DELETE thực hiện soft delete (đánh dấu `isRemoved = true`)
3. **Unique Constraints**:
   - Article Category: `title`, `slug`, `description` phải unique
   - Article: `title`, `slug`, `description` phải unique
4. **Technologies Field**: Lưu dưới dạng string với các công nghệ phân tách bằng dấu phẩy (VD: "React,TypeScript,NestJS")
5. **Date Format**: Sử dụng ISO 8601 format (VD: "2026-02-23T10:00:00Z")
6. **Pagination**: Trang đầu tiên bắt đầu từ `page=1`

---

_Last updated: February 23, 2026_
