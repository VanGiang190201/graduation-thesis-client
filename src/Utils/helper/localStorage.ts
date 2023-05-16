export function clearStoredAuth(): void {
    localStorage.removeItem('auth');
    localStorage.removeItem('persist:root');
}

export function getStoredAuth(): any {
    const storedAuth = typeof window !== 'undefined' ? localStorage.getItem('auth') : '';

    return storedAuth ? JSON.parse(storedAuth) : null;
}

export function setStoredAuth(auth: any): void {
    localStorage.setItem('auth', JSON.stringify(auth));
}
