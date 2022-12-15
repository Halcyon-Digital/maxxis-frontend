import React, { Suspense, lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardVideoIdPage from '../pages/admin/DashboardVideoIdPage';
import DashboardNewsMaker from '../pages/admin/DashboardNewsMaker';
import FinderPage from '../pages/FinderPage';
import NewsDetailsPage from '../pages/NewsDetailsPage';
import DashbaordBkash from '../pages/admin/DashbaordBkash';
import DashboardEditBkash from '../pages/admin/DashboardEditBkash';
import DashboardDealerDetailsPage from '../pages/admin/DashboardDealerDetailsPage';
import DashboardJobRequests from '../pages/admin/DashboardJobRequests';
import DashboardCareerPage from '../pages/admin/DashboardCareerPage';
import DashboardUpdateJobs from '../pages/admin/DashboardUpdateJobs';
const Invoice = lazy(() => import('../pages/Invoice'));
const DashboardOrderPage = lazy(() =>
  import('../pages/admin/DashboardOrderPage')
);
const DashboardUpdateProduct = lazy(() =>
  import('../pages/admin/DashboardUpdateProduct')
);
const Loading = lazy(() => import('../components/Loading'));
const DashboardProductCreatePage = lazy(() =>
  import('../pages/admin/DashboardProductCreatePage')
);
const DashboardTireRangePage = lazy(() =>
  import('../pages/admin/DashboardTireRangePage')
);
const DashboardTireSizePage = lazy(() =>
  import('../pages/admin/DashboardTireSizePage')
);
const PrivateRoute = lazy(() => import('../utils/PrivateRoute'));
const DashboardAdmin = lazy(() => import('../pages/admin/DashboardAdmin'));
const DashboardCustomers = lazy(() =>
  import('../pages/admin/DashboardCustomers')
);
const DashboardDealerPage = lazy(() =>
  import('../pages/admin/DashboardDealerPage')
);
const DashboardJobs = lazy(() => import('../pages/admin/DashboardJobs'));
const DashboardOrderDetails = lazy(() =>
  import('../pages/admin/DashboardOrderDetails')
);
const DashboardNews = lazy(() => import('../pages/admin/DashboardNews'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const DashboardArrivalsPage = lazy(() =>
  import('../pages/admin/DashboardArrivalsPage')
);
const DashboardBannerPage = lazy(() =>
  import('../pages/admin/DashboardBannerPage')
);
const DashboardCategoriesPage = lazy(() =>
  import('../pages/admin/DashboardCategoriesPage')
);
const DashboardGalleryPage = lazy(() =>
  import('../pages/admin/DashboardGalleryPage')
);
const DashboardPage = lazy(() => import('../pages/admin/DashboardPage'));
const DashboardProduct = lazy(() => import('../pages/admin/DashboardProduct'));
const DashboardReportsPage = lazy(() =>
  import('../pages/admin/DashboardReportsPage')
);
const CareerPage = lazy(() => import('../pages/CareerPage'));
const CartPage = lazy(() => import('../pages/CartPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const DealershipPage = lazy(() => import('../pages/DealershipPage'));
const GalleryPage = lazy(() => import('../pages/GalleryPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const JobDetailsPage = lazy(() => import('../pages/JobDetailsPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const NewsPage = lazy(() => import('../pages/NewsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const OrderPage = lazy(() => import('../pages/OrderPage'));
const ProductDetailPage = lazy(() => import('../pages/ProductDetailPage'));
const ProductsPage = lazy(() => import('../pages/ProductsPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const TireCategoriesPage = lazy(() => import('../pages/TireCategoriesPage'));
const SuccessPage = lazy(() => import('../pages/SuccessPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));
const ProfileOrderPage = lazy(() => import('../pages/ProfileOrderPage'));
const DashboardVideoPage = lazy(() =>
  import('../pages/admin/DashboardVideoPage')
);

function index() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
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
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/jobs/:slug" element={<JobDetailsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/orders" element={<ProfileOrderPage />} />
            <Route path="/invoice/:id" element={<Invoice />} />
            <Route path="/finder" element={<FinderPage />} />
            <Route path="/news/:id" element={<NewsDetailsPage />} />

            {/* Admin Route */}

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/home"
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/products"
              element={
                <PrivateRoute>
                  <DashboardProduct />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/orders"
              element={
                <PrivateRoute>
                  <DashboardOrderPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/orders/:key"
              element={
                <PrivateRoute>
                  <DashboardOrderDetails />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/products/create"
              element={
                <PrivateRoute>
                  <DashboardProductCreatePage />
                </PrivateRoute>
              }
            />

            <Route
              path="/dashboard/products/update/:slug"
              element={
                <PrivateRoute>
                  <DashboardUpdateProduct />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/gallery"
              element={
                <PrivateRoute>
                  <DashboardGalleryPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/arrivals"
              element={<DashboardArrivalsPage />}
            />
            <Route
              path="/dashboard/banner"
              element={
                <PrivateRoute>
                  <DashboardBannerPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/reports"
              element={
                <PrivateRoute>
                  <DashboardReportsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/requests"
              element={
                <PrivateRoute>
                  <DashboardDealerPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/requests/:slug"
              element={
                <PrivateRoute>
                  <DashboardDealerDetailsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/categories"
              element={
                <PrivateRoute>
                  <DashboardCategoriesPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/news"
              element={
                <PrivateRoute>
                  <DashboardNews />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/jobs"
              element={
                <PrivateRoute>
                  <DashboardCareerPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/jobs/edit/:slug"
              element={
                <PrivateRoute>
                  <DashboardUpdateJobs />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/jobs/create"
              element={
                <PrivateRoute>
                  <DashboardJobs />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/jobs-request"
              element={
                <PrivateRoute>
                  <DashboardJobRequests />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/customers"
              element={
                <PrivateRoute>
                  <DashboardCustomers />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/admin"
              element={
                <PrivateRoute>
                  <DashboardAdmin />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/video"
              element={
                <PrivateRoute>
                  <DashboardVideoPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/video/:id"
              element={
                <PrivateRoute>
                  <DashboardVideoIdPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/tire_range"
              element={
                <PrivateRoute>
                  <DashboardTireRangePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/tire_size"
              element={
                <PrivateRoute>
                  <DashboardTireSizePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/news/create"
              element={
                <PrivateRoute>
                  <DashboardNewsMaker />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/bkash"
              element={
                <PrivateRoute>
                  <DashbaordBkash />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/bkash/:id"
              element={
                <PrivateRoute>
                  <DashboardEditBkash />
                </PrivateRoute>
              }
            />

            {/* 404 Page */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default index;
