import React from 'react'
import {Routes , Route , Navigate} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import LandingPage from './Pages/LandingPage/LandingPage.jsx'
import Login from './Pages/Auth/Login.jsx'
import Signup from './Pages/Auth/Signup.jsx'
import JobDashboard from './Pages/JobSeeker/JobDashboard.jsx'
import JobDetails from './Pages/JobSeeker/JobDetails.jsx'
import SavedJobs from './Pages/JobSeeker/SavedJobs.jsx'
import UserProfile from './Pages/JobSeeker/UserProfile.jsx'
import JobPostingForm from './Pages/Employer/JobPostingForm.jsx'
import EmployerDashboard from './Pages/Employer/EmployerDashboard.jsx'
import ManageJobs from './Pages/Employer/ManageJobs.jsx'
import ApplicationViewer from './Pages/Employer/ApplicationViewer.jsx'
import EmployerProfilePage from './Pages/Employer/EmployerProfilePage.jsx'
import ProtectedRoute from './Routes/ProtectedRoutes.jsx'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        <Route path='/find-jobs' element={<JobDashboard />} />
        <Route path='/job/:jobId' element={<JobDetails />} />
        <Route path='/saved-jobs' element={<SavedJobs />} />
        <Route path='/profile' element={<UserProfile />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute requiredRole='employer' />}> 
          <Route path='/post-job' element={<JobPostingForm />} />
          <Route path='/employer-dashboard' element={<EmployerDashboard />} />
          <Route path='/manage-jobs' element={<ManageJobs />} />
          <Route path='/applicants' element={<ApplicationViewer />} />
          <Route path='/company-profile' element={<EmployerProfilePage />} />
        </Route>

        <Route path='*' element={<Navigate to='/' replace/>} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App