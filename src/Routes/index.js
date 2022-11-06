import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const AboutPage = lazy(() => import("../pages/AboutPage"));
const DashboardArrivalsPage = lazy(() =>
  import("../pages/admin/DashboardArrivalsPage")
);
const DashboardBannerPage = lazy(() =>
  import("../pages/admin/DashboardBannerPage")
);
const DashboardCategoriesPage = lazy(() =>
  import("../pages/admin/DashboardCategoriesPage")
);
const DashboardGalleryPage = lazy(() =>
  import("../pages/admin/DashboardGalleryPage")
);
const DashboardPage = lazy(() => import("../pages/admin/DashboardPage"));
const DashboardProduct = lazy(() => import("../pages/admin/DashboardProduct"));
const DashboardReportsPage = lazy(() =>
  import("../pages/admin/DashboardReportsPage")
);
const CareerPage = lazy(() => import("../pages/CareerPage"));
const CartPage = lazy(() => import("../pages/CartPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const DealershipPage = lazy(() => import("../pages/DealershipPage"));
const GalleryPage = lazy(() => import("../pages/GalleryPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const JobDetailsPage = lazy(() => import("../pages/JobDetailsPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const NewsPage = lazy(() => import("../pages/NewsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const OrderPage = lazy(() => import("../pages/OrderPage"));
const ProductDetailPage = lazy(() => import("../pages/ProductDetailPage"));
const ProductsPage = lazy(() => import("../pages/ProductsPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const TireCategoriesPage = lazy(() => import("../pages/TireCategoriesPage"));

function index() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dealer" element={<DealershipPage />} />
          <Route path="/tire/:slug" element={<TireCategoriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/jobs/:slug" element={<JobDetailsPage />} />

          {/* Admin Route */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/products" element={<DashboardProduct />} />
          <Route path="/dashboard/gallery" element={<DashboardGalleryPage />} />
          <Route
            path="/dashboard/arrivals"
            element={<DashboardArrivalsPage />}
          />
          <Route path="/dashboard/banner" element={<DashboardBannerPage />} />
          <Route path="/dashboard/reports" element={<DashboardReportsPage />} />
          <Route
            path="/dashboard/categories"
            element={<DashboardCategoriesPage />}
          />

          {/* 404 Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default index;
