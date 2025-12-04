// ============================================
// DASHBOARD FUNCTIONALITY FOR DSU
// ============================================

// DOM Elements
const dashboardModal = document.getElementById('dashboardModal');
const dashboardLink = document.getElementById('dashboardLink');
const closeDashboard = document.getElementById('closeDashboard');
const logoutBtn = document.getElementById('logoutBtn');
const dashboardNavLinks = document.querySelectorAll('.dashboard-nav-link');
const dashboardSections = document.querySelectorAll('.dashboard-section');
const dashboardTitle = document.getElementById('dashboardTitle');

// Student Dashboard Data (Simulated - In production, this would come from backend API)
let studentData = {
    id: "DSU2021001",
    name: "John Doe",
    email: "john.doe@dsu.edu.in",
    phone: "+91 9876543210",
    department: "Computer Science & Engineering",
    program: "B.Tech",
    year: "3rd Year",
    semester: "5th Semester",
    batch: "2021-2025",
    currentCGPA: 8.9,
    currentSGPA: 9.2,
    attendance: {
        overall: 85,
        totalClasses: 120,
        attended: 102,
        absent: 18,
        requiredPercentage: 75,
        subjects: [
            { code: "CSE301", name: "Data Structures", total: 30, attended: 28, percentage: 93 },
            { code: "CSE302", name: "Algorithms", total: 30, attended: 25, percentage: 83 },
            { code: "CSE303", name: "Database Systems", total: 30, attended: 27, percentage: 90 },
            { code: "CSE304", name: "Computer Networks", total: 30, attended: 22, percentage: 73 },
            { code: "MAT301", name: "Discrete Mathematics", total: 30, attended: 26, percentage: 86 }
        ]
    },
    grades: {
        semesterResults: [
            { semester: "Semester 1", sgpa: 8.5, cgpa: 8.5, result: "Pass", rank: "15" },
            { semester: "Semester 2", sgpa: 8.7, cgpa: 8.6, result: "Pass", rank: "12" },
            { semester: "Semester 3", sgpa: 9.0, cgpa: 8.7, result: "Pass", rank: "8" },
            { semester: "Semester 4", sgpa: 9.2, cgpa: 8.9, result: "Pass", rank: "5" }
        ],
        currentGrades: [
            { 
                code: "CSE301", 
                name: "Data Structures", 
                faculty: "Dr. Ravi Kumar",
                internal1: { marks: 24, max: 25 },
                internal2: { marks: 22, max: 25 },
                assignment: { marks: 18, max: 20 },
                project: { marks: 28, max: 30 },
                total: 92,
                grade: "A",
                credits: 4
            },
            { 
                code: "CSE302", 
                name: "Algorithms", 
                faculty: "Dr. Priya Sharma",
                internal1: { marks: 22, max: 25 },
                internal2: { marks: 20, max: 25 },
                assignment: { marks: 17, max: 20 },
                project: { marks: 26, max: 30 },
                total: 85,
                grade: "B+",
                credits: 4
            },
            { 
                code: "CSE303", 
                name: "Database Systems", 
                faculty: "Prof. Anil Gupta",
                internal1: { marks: 25, max: 25 },
                internal2: { marks: 23, max: 25 },
                assignment: { marks: 19, max: 20 },
                project: { marks: 29, max: 30 },
                total: 96,
                grade: "A+",
                credits: 4
            },
            { 
                code: "CSE304", 
                name: "Computer Networks", 
                faculty: "Dr. Sanjay Patel",
                internal1: { marks: 20, max: 25 },
                internal2: { marks: 18, max: 25 },
                assignment: { marks: 16, max: 20 },
                project: { marks: 24, max: 30 },
                total: 78,
                grade: "B",
                credits: 4
            }
        ]
    },
    fees: {
        totalAnnualFee: 250000,
        paidAmount: 225000,
        pendingAmount: 25000,
        dueDate: "2024-03-31",
        paymentHistory: [
            { date: "2024-01-15", transactionId: "TXN0012345", amount: 125000, mode: "Online Banking", status: "Success", receipt: "RCPT001" },
            { date: "2024-02-10", transactionId: "TXN0012346", amount: 100000, mode: "Credit Card", status: "Success", receipt: "RCPT002" }
        ]
    },
    library: {
        booksIssued: 3,
        books: [
            { id: "LIB001", title: "Introduction to Algorithms", author: "Thomas H. Cormen", issueDate: "2024-02-01", dueDate: "2024-03-01", fine: 0 },
            { id: "LIB002", title: "Database System Concepts", author: "Abraham Silberschatz", issueDate: "2024-02-10", dueDate: "2024-03-10", fine: 50 },
            { id: "LIB003", title: "Computer Networking", author: "James F. Kurose", issueDate: "2024-02-15", dueDate: "2024-03-15", fine: 0 }
        ]
    },
    courses: [
        { code: "CSE301", name: "Data Structures", faculty: "Dr. Ravi Kumar", credits: 4, schedule: "Mon, Wed 9:00-10:30 AM" },
        { code: "CSE302", name: "Algorithms", faculty: "Dr. Priya Sharma", credits: 4, schedule: "Tue, Thu 9:00-10:30 AM" },
        { code: "CSE303", name: "Database Systems", faculty: "Prof. Anil Gupta", credits: 4, schedule: "Mon, Wed 11:00-12:30 PM" },
        { code: "CSE304", name: "Computer Networks", faculty: "Dr. Sanjay Patel", credits: 4, schedule: "Tue, Thu 11:00-12:30 PM" },
        { code: "MAT301", name: "Discrete Mathematics", faculty: "Dr. Meena Iyer", credits: 3, schedule: "Fri 9:00-11:00 AM" },
        { code: "HUM301", name: "Professional Ethics", faculty: "Prof. Rajesh Verma", credits: 2, schedule: "Fri 2:00-3:30 PM" }
    ],
    assignments: [
        { id: "ASS001", subject: "Data Structures", title: "Binary Tree Implementation", dueDate: "2024-03-10", status: "Pending", submitted: false },
        { id: "ASS002", subject: "Algorithms", title: "Sorting Algorithms Analysis", dueDate: "2024-03-12", status: "Submitted", submitted: true },
        { id: "ASS003", subject: "Database Systems", title: "SQL Queries Project", dueDate: "2024-03-15", status: "Pending", submitted: false },
        { id: "ASS004", subject: "Computer Networks", title: "TCP/IP Protocol Study", dueDate: "2024-03-08", status: "Late", submitted: true }
    ],
    events: [
        { date: "2024-03-05", title: "Mid-term Examinations Start", venue: "Academic Block", time: "9:00 AM" },
        { date: "2024-03-08", title: "Women's Day Celebration", venue: "Auditorium", time: "4:00 PM" },
        { date: "2024-03-15", title: "Tech Fest 2024", venue: "Main Ground", time: "10:00 AM" },
        { date: "2024-03-20", title: "Industry Interaction", venue: "Seminar Hall", time: "2:00 PM" },
        { date: "2024-03-25", title: "Last Date for Fee Payment", venue: "Accounts Office", time: "5:00 PM" },
        { date: "2024-03-31", title: "Semester End", venue: "-", time: "-" }
    ],
    notifications: 3
};

// Calendar variables
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize dashboard if elements exist
    if (dashboardLink) {
        initializeDashboard();
    }
});

function initializeDashboard() {
    // Set up event listeners
    setupEventListeners();
    
    // Update dashboard badge
    updateDashboardBadge();
    
    // Initialize student info
    updateStudentInfo();
}

// ============================================
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
    // Open dashboard
    if (dashboardLink) {
        dashboardLink.addEventListener('click', function(e) {
            e.preventDefault();
            openDashboard();
        });
    }
    
    // Close dashboard
    if (closeDashboard) {
        closeDashboard.addEventListener('click', closeDashboardModal);
    }
    
    // Logout button
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logoutUser);
    }
    
    // Dashboard navigation
    dashboardNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            switchDashboardSection(sectionId);
        });
    });
    
    // Quick action buttons
    setupQuickActions();
    
    // Calendar navigation
    setupCalendar();
    
    // Fee payment
    setupFeePayment();
    
    // Library search
    setupLibrarySearch();
    
    // Assignment submission
    setupAssignmentSubmission();
    
    // Close dashboard when clicking outside
    if (dashboardModal) {
        dashboardModal.addEventListener('click', function(e) {
            if (e.target === dashboardModal) {
                closeDashboardModal();
            }
        });
    }
    
    // Close dashboard with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && dashboardModal.style.display === 'flex') {
            closeDashboardModal();
        }
    });
}

// ============================================
// DASHBOARD CONTROLS
// ============================================

function openDashboard() {
    if (!dashboardModal) return;
    
    dashboardModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Load initial data
    loadDashboardData();
    
    // Switch to home section
    switchDashboardSection('home');
    
    // Update notifications badge
    updateDashboardBadge();
}

function closeDashboardModal() {
    if (!dashboardModal) return;
    
    dashboardModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function switchDashboardSection(sectionId) {
    // Update active navigation link
    dashboardNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
        }
    });
    
    // Show selected section
    dashboardSections.forEach(section => {
        section.classList.remove('active');
        if (section.id === `dashboard-${sectionId}`) {
            section.classList.add('active');
        }
    });
    
    // Update dashboard title
    updateDashboardTitle(sectionId);
    
    // Load section-specific data
    loadSectionData(sectionId);
}

function updateDashboardTitle(sectionId) {
    const titles = {
        'home': 'Student Dashboard',
        'academics': 'Academic Information',
        'attendance': 'Attendance Records',
        'grades': 'Grades & Results',
        'fees': 'Fee Payment',
        'library': 'Library Services',
        'assignments': 'Assignments',
        'profile': 'Student Profile'
    };
    
    if (dashboardTitle && titles[sectionId]) {
        dashboardTitle.textContent = titles[sectionId];
    }
}

// ============================================
// DATA LOADING FUNCTIONS
// ============================================

function loadDashboardData() {
    // Update student info
    updateStudentInfo();
    
    // Update overview cards
    updateOverviewCards();
    
    // Load upcoming events
    loadUpcomingEvents();
    
    // Load current courses
    loadCurrentCourses();
    
    // Initialize calendar
    renderCalendar(currentMonth, currentYear);
    
    // Load attendance data
    loadAttendanceData();
    
    // Load grades data
    loadGradesData();
    
    // Load fee data
    loadFeeData();
    
    // Load library data
    loadLibraryData();
    
    // Load assignments data
    loadAssignmentsData();
}

function loadSectionData(sectionId) {
    switch(sectionId) {
        case 'home':
            loadUpcomingEvents();
            break;
        case 'academics':
            loadCurrentCourses();
            renderCalendar(currentMonth, currentYear);
            break;
        case 'attendance':
            loadAttendanceData();
            break;
        case 'grades':
            loadGradesData();
            break;
        case 'fees':
            loadFeeData();
            break;
        case 'library':
            loadLibraryData();
            break;
        case 'assignments':
            loadAssignmentsData();
            break;
        case 'profile':
            loadProfileData();
            break;
    }
}

function updateStudentInfo() {
    // Update student name and info
    const studentName = document.getElementById('studentName');
    const studentInfo = document.getElementById('studentInfo');
    
    if (studentName) {
        studentName.textContent = `Welcome, ${studentData.name}`;
    }
    
    if (studentInfo) {
        studentInfo.textContent = `${studentData.department} - ${studentData.year} | Roll No: ${studentData.id}`;
    }
}

function updateOverviewCards() {
    // Update attendance percentage
    const attendancePercentage = document.getElementById('attendancePercentage');
    if (attendancePercentage) {
        attendancePercentage.textContent = `${studentData.attendance.overall}%`;
    }
    
    // Update CGPA
    const currentCGPA = document.getElementById('currentCGPA');
    if (currentCGPA) {
        currentCGPA.textContent = studentData.currentCGPA;
    }
    
    // Update fee status
    const feeStatus = document.getElementById('feeStatus');
    if (feeStatus) {
        const pending = studentData.fees.pendingAmount.toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0
        });
        feeStatus.textContent = pending;
    }
    
    // Update books issued
    const booksIssued = document.getElementById('booksIssued');
    if (booksIssued) {
        booksIssued.textContent = studentData.library.booksIssued;
    }
    
    // Update attendance details
    const totalClasses = document.getElementById('totalClasses');
    const attendedClasses = document.getElementById('attendedClasses');
    const absentClasses = document.getElementById('absentClasses');
    const attendanceRequired = document.getElementById('attendanceRequired');
    
    if (totalClasses) totalClasses.textContent = studentData.attendance.totalClasses;
    if (attendedClasses) attendedClasses.textContent = studentData.attendance.attended;
    if (absentClasses) absentClasses.textContent = studentData.attendance.absent;
    if (attendanceRequired) attendanceRequired.textContent = `${studentData.attendance.requiredPercentage}%`;
    
    // Update fee details
    const totalFee = document.getElementById('totalFee');
    const paidAmount = document.getElementById('paidAmount');
    const pendingAmount = document.getElementById('pendingAmount');
    const dueDate = document.getElementById('dueDate');
    
    if (totalFee) {
        totalFee.textContent = `₹${studentData.fees.totalAnnualFee.toLocaleString('en-IN')}`;
    }
    if (paidAmount) {
        paidAmount.textContent = `₹${studentData.fees.paidAmount.toLocaleString('en-IN')}`;
    }
    if (pendingAmount) {
        pendingAmount.textContent = `₹${studentData.fees.pendingAmount.toLocaleString('en-IN')}`;
    }
    if (dueDate) {
        const dueDateObj = new Date(studentData.fees.dueDate);
        dueDate.textContent = dueDateObj.toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: '2-digit'
        });
    }
}

function loadUpcomingEvents() {
    const upcomingEvents = document.getElementById('upcomingEvents');
    if (!upcomingEvents) return;
    
    // Sort events by date
    const sortedEvents = [...studentData.events].sort((a, b) => 
        new Date(a.date) - new Date(b.date)
    );
    
    // Get next 5 events
    const nextEvents = sortedEvents.slice(0, 5);
    
    let html = '';
    nextEvents.forEach(event => {
        const eventDate = new Date(event.date);
        const formattedDate = eventDate.toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
        
        html += `
            <tr>
                <td>${formattedDate}</td>
                <td><strong>${event.title}</strong></td>
                <td>${event.venue}</td>
                <td>${event.time}</td>
            </tr>
        `;
    });
    
    upcomingEvents.innerHTML = html;
}

function loadCurrentCourses() {
    const currentCourses = document.getElementById('currentCourses');
    if (!currentCourses) return;
    
    let html = '';
    studentData.courses.forEach(course => {
        html += `
            <tr>
                <td><strong>${course.code}</strong></td>
                <td>${course.name}</td>
                <td>${course.faculty}</td>
                <td>${course.credits}</td>
                <td>${course.schedule}</td>
            </tr>
        `;
    });
    
    currentCourses.innerHTML = html;
}

// ============================================
// CALENDAR FUNCTIONS
// ============================================

function setupCalendar() {
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    
    if (prevMonthBtn) {
        prevMonthBtn.addEventListener('click', function() {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            renderCalendar(currentMonth, currentYear);
        });
    }
    
    if (nextMonthBtn) {
        nextMonthBtn.addEventListener('click', function() {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            renderCalendar(currentMonth, currentYear);
        });
    }
}

function renderCalendar(month, year) {
    const calendarDays = document.getElementById('calendarDays');
    const currentMonthElem = document.getElementById('currentMonth');
    
    if (!calendarDays || !currentMonthElem) return;
    
    // Update month title
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    currentMonthElem.textContent = `${monthNames[month]} ${year}`;
    
    // Get first day of month
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    // Get day of week for first day (0 = Sunday, 1 = Monday, etc.)
    let firstDayIndex = firstDay.getDay();
    
    // Create calendar header (days of week)
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let html = '';
    
    // Add day names
    dayNames.forEach(day => {
        html += `<div class="calendar-day" style="background: var(--grey); color: white; font-weight: bold;">${day}</div>`;
    });
    
    // Add empty cells for days before first day of month
    for (let i = 0; i < firstDayIndex; i++) {
        html += '<div class="calendar-day"></div>';
    }
    
    // Add days of month
    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
        const currentDay = new Date(year, month, day);
        let dayClass = "calendar-day";
        
        // Check if it's today
        if (today.getDate() === day && 
            today.getMonth() === month && 
            today.getFullYear() === year) {
            dayClass += " current";
        }
        
        // Check if there are events on this day
        const hasEvent = studentData.events.some(event => {
            const eventDate = new Date(event.date);
            return eventDate.getDate() === day && 
                   eventDate.getMonth() === month && 
                   eventDate.getFullYear() === year;
        });
        
        if (hasEvent) {
            dayClass += " event";
        }
        
        html += `<div class="${dayClass}">${day}</div>`;
    }
    
    calendarDays.innerHTML = html;
}

// ============================================
// ATTENDANCE FUNCTIONS
// ============================================

function loadAttendanceData() {
    const subjectAttendance = document.getElementById('subjectAttendance');
    if (!subjectAttendance) return;
    
    let html = '';
    studentData.attendance.subjects.forEach(subject => {
        const status = subject.percentage >= studentData.attendance.requiredPercentage ? 
            '<span style="color: #27ae60; font-weight: bold;">Good</span>' : 
            '<span style="color: #e74c3c; font-weight: bold;">Warning</span>';
        
        html += `
            <tr>
                <td><strong>${subject.name}</strong></td>
                <td>${subject.total}</td>
                <td>${subject.attended}</td>
                <td>
                    <div class="attendance-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${subject.percentage}%"></div>
                        </div>
                        <div class="progress-labels">
                            <span>${subject.percentage}%</span>
                            <span>Required: ${studentData.attendance.requiredPercentage}%</span>
                        </div>
                    </div>
                </td>
                <td>${status}</td>
            </tr>
        `;
    });
    
    subjectAttendance.innerHTML = html;
}

// ============================================
// GRADES FUNCTIONS
// ============================================

function loadGradesData() {
    loadSemesterResults();
    loadCurrentGrades();
}

function loadSemesterResults() {
    const semesterResults = document.getElementById('semesterResults');
    if (!semesterResults) return;
    
    let html = '';
    studentData.grades.semesterResults.forEach(result => {
        html += `
            <tr>
                <td><strong>${result.semester}</strong></td>
                <td>${result.sgpa}</td>
                <td>${result.cgpa}</td>
                <td><span style="color: #27ae60; font-weight: bold;">${result.result}</span></td>
                <td>${result.rank}</td>
            </tr>
        `;
    });
    
    semesterResults.innerHTML = html;
}

function loadCurrentGrades() {
    const currentGrades = document.getElementById('currentGrades');
    if (!currentGrades) return;
    
    let html = '';
    studentData.grades.currentGrades.forEach(grade => {
        const gradeColor = getGradeColor(grade.grade);
        
        html += `
            <tr>
                <td><strong>${grade.name}</strong><br><small>${grade.code}</small></td>
                <td>${grade.internal1.marks}/${grade.internal1.max}</td>
                <td>${grade.internal2.marks}/${grade.internal2.max}</td>
                <td>${grade.assignment.marks}/${grade.assignment.max}</td>
                <td><strong>${grade.total}/100</strong></td>
                <td><span style="color: ${gradeColor}; font-weight: bold;">${grade.grade}</span></td>
            </tr>
        `;
    });
    
    currentGrades.innerHTML = html;
}

function getGradeColor(grade) {
    const gradeColors = {
        'A+': '#27ae60',
        'A': '#2ecc71',
        'B+': '#f39c12',
        'B': '#e67e22',
        'C+': '#e74c3c',
        'C': '#c0392b',
        'D': '#7f8c8d',
        'F': '#e74c3c'
    };
    
    return gradeColors[grade] || '#7f8c8d';
}

// ============================================
// FEE PAYMENT FUNCTIONS
// ============================================

function setupFeePayment() {
    const proceedPayment = document.getElementById('proceedPayment');
    if (!proceedPayment) return;
    
    proceedPayment.addEventListener('click', function() {
        const amount = document.getElementById('paymentAmount').value;
        const method = document.getElementById('paymentMethod').value;
        
        if (!amount || amount <= 0) {
            showAlert('Please enter a valid payment amount', 'error');
            return;
        }
        
        if (!method) {
            showAlert('Please select a payment method', 'error');
            return;
        }
        
        if (parseInt(amount) > studentData.fees.pendingAmount) {
            showAlert('Payment amount cannot exceed pending amount', 'error');
            return;
        }
        
        // Simulate payment processing
        processPayment(amount, method);
    });
}

function loadFeeData() {
    const paymentHistory = document.getElementById('paymentHistory');
    if (!paymentHistory) return;
    
    let html = '';
    studentData.fees.paymentHistory.forEach(payment => {
        const paymentDate = new Date(payment.date);
        const formattedDate = paymentDate.toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
        
        const amount = parseInt(payment.amount).toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0
        });
        
        html += `
            <tr>
                <td>${formattedDate}</td>
                <td><code>${payment.transactionId}</code></td>
                <td><strong>${amount}</strong></td>
                <td>${payment.mode}</td>
                <td><span style="color: #27ae60; font-weight: bold;">${payment.status}</span></td>
                <td>
                    <button class="download-receipt" data-receipt="${payment.receipt}" 
                            style="background: var(--yellow); color: var(--grey); border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">
                        <i class="fas fa-download"></i> Download
                    </button>
                </td>
            </tr>
        `;
    });
    
    paymentHistory.innerHTML = html;
    
    // Add event listeners for receipt download buttons
    document.querySelectorAll('.download-receipt').forEach(button => {
        button.addEventListener('click', function() {
            const receiptId = this.getAttribute('data-receipt');
            downloadReceipt(receiptId);
        });
    });
}

function processPayment(amount, method) {
    // Show loading state
    const proceedBtn = document.getElementById('proceedPayment');
    const originalText = proceedBtn.innerHTML;
    proceedBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    proceedBtn.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        // Generate mock transaction ID
        const transactionId = 'TXN' + Math.random().toString(36).substr(2, 9).toUpperCase();
        const receiptId = 'RCPT' + Math.random().toString(36).substr(2, 6).toUpperCase();
        
        // Update student data
        studentData.fees.paidAmount += parseInt(amount);
        studentData.fees.pendingAmount -= parseInt(amount);
        
        // Add to payment history
        studentData.fees.paymentHistory.unshift({
            date: new Date().toISOString().split('T')[0],
            transactionId: transactionId,
            amount: parseInt(amount),
            mode: method.charAt(0).toUpperCase() + method.slice(1),
            status: "Success",
            receipt: receiptId
        });
        
        // Update UI
        updateOverviewCards();
        loadFeeData();
        
        // Reset form
        document.getElementById('paymentAmount').value = '';
        document.getElementById('paymentMethod').value = '';
        
        // Show success message
        showAlert(`Payment of ₹${amount} successful! Transaction ID: ${transactionId}`, 'success');
        
        // Reset button
        proceedBtn.innerHTML = originalText;
        proceedBtn.disabled = false;
        
        // Update notifications badge
        studentData.notifications++;
        updateDashboardBadge();
        
    }, 2000);
}

function downloadReceipt(receiptId) {
    showAlert(`Downloading receipt: ${receiptId}`, 'info');
    // In a real application, this would generate and download a PDF
}

// ============================================
// LIBRARY FUNCTIONS
// ============================================

function setupLibrarySearch() {
    const searchBookBtn = document.getElementById('searchBookBtn');
    if (!searchBookBtn) return;
    
    searchBookBtn.addEventListener('click', function() {
        const searchTerm = document.getElementById('searchBook').value.toLowerCase();
        if (!searchTerm.trim()) {
            showAlert('Please enter a search term', 'error');
            return;
        }
        
        searchBooks(searchTerm);
    });
    
    // Enable search on Enter key
    const searchInput = document.getElementById('searchBook');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBookBtn.click();
            }
        });
    }
}

function loadLibraryData() {
    const issuedBooks = document.getElementById('issuedBooks');
    if (!issuedBooks) return;
    
    let html = '';
    studentData.library.books.forEach(book => {
        const issueDate = new Date(book.issueDate);
        const dueDate = new Date(book.dueDate);
        const today = new Date();
        
        const fineColor = book.fine > 0 ? '#e74c3c' : '#27ae60';
        const fineText = book.fine > 0 ? 
            `<span style="color: ${fineColor}; font-weight: bold;">₹${book.fine}</span>` : 
            '<span style="color: #27ae60;">No Fine</span>';
        
        const isOverdue = dueDate < today && book.fine === 0;
        
        html += `
            <tr>
                <td><code>${book.id}</code></td>
                <td><strong>${book.title}</strong></td>
                <td>${book.author}</td>
                <td>${issueDate.toLocaleDateString('en-IN')}</td>
                <td>
                    ${dueDate.toLocaleDateString('en-IN')}
                    ${isOverdue ? '<br><small style="color: #e74c3c;">(Overdue)</small>' : ''}
                </td>
                <td>${fineText}</td>
                <td>
                    <button class="renew-book" data-book="${book.id}" 
                            style="background: var(--yellow); color: var(--grey); border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; margin-right: 5px;">
                        <i class="fas fa-redo"></i> Renew
                    </button>
                </td>
            </tr>
        `;
    });
    
    issuedBooks.innerHTML = html;
    
    // Add event listeners for renew buttons
    document.querySelectorAll('.renew-book').forEach(button => {
        button.addEventListener('click', function() {
            const bookId = this.getAttribute('data-book');
            renewBook(bookId);
        });
    });
}

function searchBooks(searchTerm) {
    const searchResults = document.getElementById('searchResults');
    if (!searchResults) return;
    
    // Mock search results
    const mockBooks = [
        { id: "LIB004", title: "Clean Code", author: "Robert C. Martin", available: true, copies: 3 },
        { id: "LIB005", title: "Design Patterns", author: "Erich Gamma", available: false, copies: 0 },
        { id: "LIB006", title: "The Pragmatic Programmer", author: "Andrew Hunt", available: true, copies: 2 },
        { id: "LIB007", title: "Introduction to Machine Learning", author: "Ethem Alpaydin", available: true, copies: 1 },
        { id: "LIB008", title: "Deep Learning", author: "Ian Goodfellow", available: true, copies: 4 }
    ];
    
    // Filter based on search term
    const filteredBooks = mockBooks.filter(book => 
        book.title.toLowerCase().includes(searchTerm) || 
        book.author.toLowerCase().includes(searchTerm)
    );
    
    if (filteredBooks.length === 0) {
        searchResults.innerHTML = `
            <div style="text-align: center; padding: 20px; color: var(--grey-light);">
                <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 10px;"></i>
                <p>No books found matching "${searchTerm}"</p>
            </div>
        `;
        return;
    }
    
    let html = `
        <div style="margin-top: 20px;">
            <h4 style="color: var(--grey); margin-bottom: 15px;">Search Results (${filteredBooks.length} found)</h4>
            <div class="dashboard-table">
                <table style="width: 100%;">
                    <thead>
                        <tr>
                            <th>Book ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Availability</th>
                            <th>Copies</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
    `;
    
    filteredBooks.forEach(book => {
        const availability = book.available ? 
            '<span style="color: #27ae60; font-weight: bold;">Available</span>' : 
            '<span style="color: #e74c3c; font-weight: bold;">Not Available</span>';
        
        html += `
            <tr>
                <td><code>${book.id}</code></td>
                <td><strong>${book.title}</strong></td>
                <td>${book.author}</td>
                <td>${availability}</td>
                <td>${book.copies}</td>
                <td>
                    <button class="request-book" data-book="${book.id}" ${!book.available ? 'disabled' : ''}
                            style="background: ${book.available ? 'var(--yellow)' : '#95a5a6'}; 
                                   color: var(--grey); border: none; padding: 5px 10px; 
                                   border-radius: 4px; cursor: ${book.available ? 'pointer' : 'not-allowed'};">
                        <i class="fas fa-book"></i> Request
                    </button>
                </td>
            </tr>
        `;
    });
    
    html += `
                    </tbody>
                </table>
            </div>
        </div>
    `;
    
    searchResults.innerHTML = html;
    
    // Add event listeners for request buttons
    document.querySelectorAll('.request-book').forEach(button => {
        if (!button.disabled) {
            button.addEventListener('click', function() {
                const bookId = this.getAttribute('data-book');
                requestBook(bookId);
            });
        }
    });
}

function renewBook(bookId) {
    // Find the book
    const bookIndex = studentData.library.books.findIndex(book => book.id === bookId);
    
    if (bookIndex !== -1) {
        // Extend due date by 15 days
        const currentDueDate = new Date(studentData.library.books[bookIndex].dueDate);
        currentDueDate.setDate(currentDueDate.getDate() + 15);
        studentData.library.books[bookIndex].dueDate = currentDueDate.toISOString().split('T')[0];
        
        // Update UI
        loadLibraryData();
        showAlert(`Book ${bookId} renewed successfully! New due date: ${currentDueDate.toLocaleDateString('en-IN')}`, 'success');
    }
}

function requestBook(bookId) {
    showAlert(`Book request submitted for ${bookId}. You will be notified when it's available.`, 'info');
}

// ============================================
// ASSIGNMENTS FUNCTIONS
// ============================================

function setupAssignmentSubmission() {
    const submitAssignment = document.getElementById('submitAssignment');
    if (!submitAssignment) return;
    
    submitAssignment.addEventListener('click', function() {
        const assignmentSelect = document.getElementById('assignmentSelect');
        const assignmentFile = document.getElementById('assignmentFile');
        
        if (!assignmentSelect.value) {
            showAlert('Please select an assignment', 'error');
            return;
        }
        
        if (!assignmentFile.files.length) {
            showAlert('Please select a file to upload', 'error');
            return;
        }
        
        const file = assignmentFile.files[0];
        const fileSize = file.size / (1024 * 1024); // Size in MB
        
        if (fileSize > 10) {
            showAlert('File size exceeds 10MB limit', 'error');
            return;
        }
        
        submitAssignmentFile(assignmentSelect.value, file);
    });
}

function loadAssignmentsData() {
    const pendingAssignments = document.getElementById('pendingAssignments');
    const assignmentSelect = document.getElementById('assignmentSelect');
    
    if (!pendingAssignments || !assignmentSelect) return;
    
    // Clear previous options
    assignmentSelect.innerHTML = '<option value="">Choose assignment to submit</option>';
    
    let html = '';
    studentData.assignments.forEach(assignment => {
        const dueDate = new Date(assignment.dueDate);
        const today = new Date();
        const daysRemaining = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
        
        let statusText = '';
        let statusColor = '';
        
        if (assignment.submitted) {
            statusText = assignment.status === 'Late' ? 'Submitted Late' : 'Submitted';
            statusColor = assignment.status === 'Late' ? '#e67e22' : '#27ae60';
        } else {
            if (daysRemaining < 0) {
                statusText = 'Overdue';
                statusColor = '#e74c3c';
            } else if (daysRemaining <= 2) {
                statusText = 'Due Soon';
                statusColor = '#f39c12';
            } else {
                statusText = 'Pending';
                statusColor = '#3498db';
            }
        }
        
        html += `
            <tr>
                <td><strong>${assignment.subject}</strong></td>
                <td>${assignment.title}<br><small>ID: ${assignment.id}</small></td>
                <td>${dueDate.toLocaleDateString('en-IN')}<br>
                    <small>${daysRemaining > 0 ? `${daysRemaining} days left` : `${Math.abs(daysRemaining)} days overdue`}</small>
                </td>
                <td><span style="color: ${statusColor}; font-weight: bold;">${statusText}</span></td>
                <td>
                    ${!assignment.submitted ? `
                        <button class="submit-assignment-btn" data-assignment="${assignment.id}" 
                                style="background: var(--yellow); color: var(--grey); border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">
                            <i class="fas fa-upload"></i> Submit
                        </button>
                    ` : `
                        <button class="view-submission" data-assignment="${assignment.id}" 
                                style="background: #3498db; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">
                            <i class="fas fa-eye"></i> View
                        </button>
                    `}
                </td>
            </tr>
        `;
        
        // Add to dropdown if not submitted
        if (!assignment.submitted) {
            const option = document.createElement('option');
            option.value = assignment.id;
            option.textContent = `${assignment.subject}: ${assignment.title}`;
            assignmentSelect.appendChild(option);
        }
    });
    
    pendingAssignments.innerHTML = html;
    
    // Add event listeners for submit buttons
    document.querySelectorAll('.submit-assignment-btn').forEach(button => {
        button.addEventListener('click', function() {
            const assignmentId = this.getAttribute('data-assignment');
            const assignmentSelect = document.getElementById('assignmentSelect');
            assignmentSelect.value = assignmentId;
            assignmentSelect.dispatchEvent(new Event('change'));
        });
    });
    
    // Add event listeners for view buttons
    document.querySelectorAll('.view-submission').forEach(button => {
        button.addEventListener('click', function() {
            const assignmentId = this.getAttribute('data-assignment');
            viewSubmission(assignmentId);
        });
    });
}

function submitAssignmentFile(assignmentId, file) {
    const submitBtn = document.getElementById('submitAssignment');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Uploading...';
    submitBtn.disabled = true;
    
    // Simulate upload delay
    setTimeout(() => {
        // Update assignment status
        const assignmentIndex = studentData.assignments.findIndex(a => a.id === assignmentId);
        if (assignmentIndex !== -1) {
            const dueDate = new Date(studentData.assignments[assignmentIndex].dueDate);
            const today = new Date();
            
            studentData.assignments[assignmentIndex].submitted = true;
            studentData.assignments[assignmentIndex].status = dueDate < today ? 'Late' : 'Submitted';
            studentData.assignments[assignmentIndex].submittedDate = today.toISOString().split('T')[0];
            studentData.assignments[assignmentIndex].fileName = file.name;
        }
        
        // Update UI
        loadAssignmentsData();
        
        // Reset file input
        document.getElementById('assignmentFile').value = '';
        
        // Show success message
        showAlert(`Assignment "${assignmentId}" submitted successfully!`, 'success');
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Update notifications
        studentData.notifications--;
        if (studentData.notifications < 0) studentData.notifications = 0;
        updateDashboardBadge();
        
    }, 2000);
}

function viewSubmission(assignmentId) {
    const assignment = studentData.assignments.find(a => a.id === assignmentId);
    if (assignment) {
        showAlert(`Viewing submission for "${assignment.title}"\nSubmitted on: ${assignment.submittedDate}\nFile: ${assignment.fileName}`, 'info');
    }
}

// ============================================
// PROFILE FUNCTIONS
// ============================================

function loadProfileData() {
    // This would load and display profile information
    // For now, we'll just show a placeholder
    const profileSection = document.getElementById('dashboard-profile');
    if (!profileSection) return;
    
    profileSection.innerHTML = `
        <div style="text-align: center; padding: 40px;">
            <div style="width: 150px; height: 150px; background: var(--yellow); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                <i class="fas fa-user-graduate" style="font-size: 4rem; color: var(--grey);"></i>
            </div>
            <h3>${studentData.name}</h3>
            <p style="color: var(--grey-light);">${studentData.program} in ${studentData.department}</p>
            
            <div style="max-width: 600px; margin: 30px auto;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                    <div style="text-align: left;">
                        <h4>Student Information</h4>
                        <p><strong>Roll Number:</strong> ${studentData.id}</p>
                        <p><strong>Batch:</strong> ${studentData.batch}</p>
                        <p><strong>Year/Semester:</strong> ${studentData.year} (${studentData.semester})</p>
                        <p><strong>Email:</strong> ${studentData.email}</p>
                        <p><strong>Phone:</strong> ${studentData.phone}</p>
                    </div>
                    <div style="text-align: left;">
                        <h4>Academic Summary</h4>
                        <p><strong>Current CGPA:</strong> ${studentData.currentCGPA}/10</p>
                        <p><strong>Current SGPA:</strong> ${studentData.currentSGPA}/10</p>
                        <p><strong>Overall Attendance:</strong> ${studentData.attendance.overall}%</p>
                        <p><strong>Books Issued:</strong> ${studentData.library.booksIssued}</p>
                    </div>
                </div>
                
                <div style="margin-top: 30px;">
                    <button id="editProfile" class="btn btn-primary" style="margin-right: 10px;">
                        <i class="fas fa-edit"></i> Edit Profile
                    </button>
                    <button id="changePassword" class="btn btn-outline">
                        <i class="fas fa-key"></i> Change Password
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners for profile buttons
    document.getElementById('editProfile')?.addEventListener('click', function() {
        showAlert('Edit profile functionality will be available soon!', 'info');
    });
    
    document.getElementById('changePassword')?.addEventListener('click', function() {
        showAlert('Password change functionality will be available soon!', 'info');
    });
}

// ============================================
// QUICK ACTIONS
// ============================================

function setupQuickActions() {
    // Download ID Card
    const downloadIdCard = document.getElementById('downloadIdCard');
    if (downloadIdCard) {
        downloadIdCard.addEventListener('click', function() {
            showAlert('Downloading ID Card...', 'info');
            // Simulate download delay
            setTimeout(() => {
                showAlert('ID Card downloaded successfully!', 'success');
            }, 1000);
        });
    }
    
    // Download Transcript
    const downloadTranscript = document.getElementById('downloadTranscript');
    if (downloadTranscript) {
        downloadTranscript.addEventListener('click', function() {
            showAlert('Generating transcript...', 'info');
            setTimeout(() => {
                showAlert('Transcript downloaded successfully!', 'success');
            }, 1500);
        });
    }
    
    // Apply Leave
    const applyLeave = document.getElementById('applyLeave');
    if (applyLeave) {
        applyLeave.addEventListener('click', function() {
            showContentModal('Apply for Leave', `
                <form id="leaveForm" style="margin-top: 20px;">
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; color: var(--grey);">Leave Type</label>
                        <select style="width: 100%; padding: 10px; border-radius: 5px; border: 1px solid #ddd;">
                            <option value="">Select Leave Type</option>
                            <option value="medical">Medical Leave</option>
                            <option value="personal">Personal Leave</option>
                            <option value="emergency">Emergency Leave</option>
                        </select>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
                        <div>
                            <label style="display: block; margin-bottom: 5px; color: var(--grey);">From Date</label>
                            <input type="date" style="width: 100%; padding: 10px; border-radius: 5px; border: 1px solid #ddd;">
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 5px; color: var(--grey);">To Date</label>
                            <input type="date" style="width: 100%; padding: 10px; border-radius: 5px; border: 1px solid #ddd;">
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; color: var(--grey);">Reason</label>
                        <textarea rows="4" style="width: 100%; padding: 10px; border-radius: 5px; border: 1px solid #ddd;" placeholder="Briefly explain the reason for leave"></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-primary" style="width: 100%;">
                        <i class="fas fa-paper-plane"></i> Submit Leave Application
                    </button>
                </form>
            `);
        });
    }
    
    // Raise Ticket
    const raiseTicket = document.getElementById('raiseTicket');
    if (raiseTicket) {
        raiseTicket.addEventListener('click', function() {
            showContentModal('Raise Support Ticket', `
                <form id="ticketForm" style="margin-top: 20px;">
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; color: var(--grey);">Ticket Category</label>
                        <select style="width: 100%; padding: 10px; border-radius: 5px; border: 1px solid #ddd;">
                            <option value="">Select Category</option>
                            <option value="academic">Academic Issue</option>
                            <option value="technical">Technical Issue</option>
                            <option value="fee">Fee Related</option>
                            <option value="hostel">Hostel Issue</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; color: var(--grey);">Subject</label>
                        <input type="text" style="width: 100%; padding: 10px; border-radius: 5px; border: 1px solid #ddd;" placeholder="Brief subject of your issue">
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; color: var(--grey);">Description</label>
                        <textarea rows="4" style="width: 100%; padding: 10px; border-radius: 5px; border: 1px solid #ddd;" placeholder="Describe your issue in detail"></textarea>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; color: var(--grey);">Attachment (Optional)</label>
                        <input type="file" style="width: 100%; padding: 10px; border-radius: 5px; border: 1px solid #ddd;">
                    </div>
                    
                    <button type="submit" class="btn btn-primary" style="width: 100%;">
                        <i class="fas fa-ticket-alt"></i> Submit Ticket
                    </button>
                </form>
            `);
        });
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function updateDashboardBadge() {
    const dashboardBadge = document.getElementById('dashboardBadge');
    if (dashboardBadge) {
        if (studentData.notifications > 0) {
            dashboardBadge.textContent = studentData.notifications;
            dashboardBadge.style.display = 'block';
        } else {
            dashboardBadge.style.display = 'none';
        }
    }
}

function showAlert(message, type = 'info') {
    // Remove existing alerts
    const existingAlert = document.querySelector('.dashboard-alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `dashboard-alert ${type}`;
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 5000;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        animation: slideInRight 0.3s ease, fadeOut 0.3s ease 4s forwards;
        max-width: 400px;
    `;
    
    // Set background color based on type
    const colors = {
        'success': '#27ae60',
        'error': '#e74c3c',
        'info': '#3498db',
        'warning': '#f39c12'
    };
    
    alert.style.background = colors[type] || colors.info;
    
    // Add icon based on type
    const icons = {
        'success': 'check-circle',
        'error': 'exclamation-circle',
        'info': 'info-circle',
        'warning': 'exclamation-triangle'
    };
    
    const icon = icons[type] || 'info-circle';
    alert.innerHTML = `<i class="fas fa-${icon}"></i> ${message}`;
    
    // Add to body
    document.body.appendChild(alert);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alert.parentNode) {
            alert.style.animation = 'fadeOut 0.3s ease forwards';
            setTimeout(() => {
                if (alert.parentNode) alert.remove();
            }, 300);
        }
    }, 4500);
    
    // Add CSS for animations
    if (!document.querySelector('#alert-animations')) {
        const style = document.createElement('style');
        style.id = 'alert-animations';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

function showContentModal(title, content) {
    // Check if contentModal exists (from main script)
    if (typeof showContentModal !== 'undefined' && typeof contentModal !== 'undefined') {
        window.showContentModal(title, content);
    } else {
        // Fallback alert if main modal function not available
        showAlert(title + " - This feature requires the main modal system", 'info');
    }
}

function logoutUser() {
    showAlert('Logging out...', 'info');
    
    // Simulate logout delay
    setTimeout(() => {
        closeDashboardModal();
        showAlert('Successfully logged out!', 'success');
        
        // Reset login button
        const openLoginBtn = document.getElementById('openLogin');
        if (openLoginBtn) {
            openLoginBtn.innerHTML = 'Student Login';
            openLoginBtn.style.background = '';
            openLoginBtn.style.color = '';
        }
        
        // Reset dashboard badge
        studentData.notifications = 0;
        updateDashboardBadge();
    }, 1000);
}

// ============================================
// INITIALIZE DASHBOARD
// ============================================

// Make sure the dashboard initializes when the page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDashboard);
} else {
    initializeDashboard();
}

// Export functions for use in main script (if needed)
window.dashboardModule = {
    openDashboard,
    closeDashboardModal,
    showAlert,
    updateStudentData: function(newData) {
        studentData = { ...studentData, ...newData };
        if (dashboardModal.style.display === 'flex') {
            loadDashboardData();
        }
    }
};