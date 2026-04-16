const app = {
    state: {
        isLoggedIn: false,
        currentView: 'sign-in-screen',
        timerSeconds: 0,
        timerInterval: null,
        isPaused: false,
        theme: localStorage.getItem('rm-theme') || 'light'
    },

    init() {
        this.cacheElements();
        this.bindEvents();
        this.applyTheme();
    },

    cacheElements() {
        this.els = {
            signInScreen: document.getElementById('sign-in-screen'),
            appContainer: document.getElementById('app-container'),
            signInForm: document.getElementById('sign-in-form'),
            checkInbox: document.getElementById('check-inbox'),
            userEmailDisplay: document.getElementById('user-email-display'),
            themeToggle: document.getElementById('theme-toggle'),
            views: document.querySelectorAll('.view'),
            tabBtns: document.querySelectorAll('.tab-btn'),
            clockOutBtn: document.getElementById('clock-out'),
            clockPauseBtn: document.getElementById('clock-pause'),
            clockTimeDisplay: document.getElementById('clock-time'),
            timerStatus: document.getElementById('timer-status'),
            modals: document.querySelectorAll('.modal'),
            closeModals: document.querySelectorAll('.close-modal'),
            navLinks: document.querySelectorAll('[data-target]')
        };
    },

    bindEvents() {
        // Sign In Flow
        this.els.signInForm.addEventListener('submit', (e) => this.handleSignIn(e));
        document.getElementById('resend-link').addEventListener('click', () => alert('Sign-in link resent!'));

        // Navigation & Tabs
        this.els.tabBtns.forEach(btn => btn.addEventListener('click', (e) => this.switchTab(e.target)));
        document.getElementById('report-issue').addEventListener('click', () => this.navigate('report-form'));
        document.getElementById('view-tickets').addEventListener('click', () => this.navigate('tickets-list-view'));
        document.getElementById('add-new-job').addEventListener('click', () => this.openModal('log-work-modal'));
        document.querySelectorAll('.breadcrumb').forEach(btn => btn.addEventListener('click', () => this.navigate('stores-tickets')));

        // Modals
        this.els.closeModals.forEach(btn => btn.addEventListener('click', () => this.closeAllModals()));
        this.els.modals.forEach(modal => modal.addEventListener('click', (e) => { if(e.target === modal) this.closeAllModals(); }));

        // Timer Controls
        this.els.clockPauseBtn.addEventListener('click', () => this.togglePause());
        this.els.clockOutBtn.addEventListener('click', () => this.openModal('clock-out-modal'));
        document.getElementById('complete-clock-out').addEventListener('click', () => {
            this.stopTimer();
            this.closeAllModals();
            alert('Clocked out successfully! Work log saved.');
        });

        // Theme
        this.els.themeToggle.addEventListener('click', () => this.toggleTheme());

        // Forms
        document.querySelectorAll('form').forEach(form => form.addEventListener('submit', (e) => this.handleFormSubmit(e)));

        // Sign Out
        document.getElementById('sign-out').addEventListener('click', () => location.reload());
    },

    handleSignIn(e) {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        this.els.userEmailDisplay.textContent = email;
        this.els.signInForm.classList.add('hidden');
        this.els.checkInbox.classList.remove('hidden');

        // Mock auto-login for demo purposes
        setTimeout(() => {
            this.state.isLoggedIn = true;
            this.els.signInScreen.classList.add('hidden');
            this.els.appContainer.classList.remove('hidden');
            this.navigate('stores-tickets');
            this.startTimer();
        }, 1200);
    },

    navigate(viewId) {
        this.els.views.forEach(v => v.classList.remove('active'));
        const target = document.getElementById(viewId);
        if (target) {
            target.classList.add('active');
            this.state.currentView = viewId;
            window.scrollTo(0, 0);
        }
    },

    switchTab(btn) {
        const parent = btn.parentElement;
        parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    },

    startTimer() {
        this.stopTimer();
        this.state.timerInterval = setInterval(() => {
            if (!this.state.isPaused) {
                this.state.timerSeconds++;
                this.updateTimerDisplay();
            }
        }, 1000);
    },

    stopTimer() {
        clearInterval(this.state.timerInterval);
    },

    togglePause() {
        this.state.isPaused = !this.state.isPaused;
        this.els.timerStatus.textContent = this.state.isPaused ? '⏸ Waiting' : '⏱️ Clocked In';
    },

    updateTimerDisplay() {
        const h = Math.floor(this.state.timerSeconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((this.state.timerSeconds % 3600) / 60).toString().padStart(2, '0');
        const s = (this.state.timerSeconds % 60).toString().padStart(2, '0');
        this.els.clockTimeDisplay.textContent = `${h}:${m}:${s}`;
    },

    openModal(modalId) {
        document.getElementById(modalId).classList.remove('hidden');
    },

    closeAllModals() {
        this.els.modals.forEach(m => m.classList.add('hidden'));
    },

    toggleTheme() {
        this.state.theme = this.state.theme === 'light' ? 'dark' : 'light';
        this.applyTheme();
    },

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.state.theme);
        this.els.themeToggle.textContent = this.state.theme === 'light' ? '🌙' : '☀️';
        localStorage.setItem('rm-theme', this.state.theme);
    },

    handleFormSubmit(e) {
        e.preventDefault();
        const btn = e.target.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = 'Submitting...';
        btn.disabled = true;

        setTimeout(() => {
            alert('✅ Successfully submitted!');
            btn.textContent = originalText;
            btn.disabled = false;
            e.target.reset();
            this.closeAllModals();
            this.navigate('stores-tickets');
        }, 600);
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
