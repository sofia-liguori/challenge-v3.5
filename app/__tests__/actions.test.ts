import { getSession, login, logout, updateData } from '../actions';
import { defaultSession, sleep } from '../../auth/lib'; // Import sleep here

// Mock next/cache
jest.mock('next/cache', () => ({
  revalidatePath: jest.fn(),
}));

// Mock iron-session
jest.mock('iron-session', () => ({
  getIronSession: jest.fn(),
}));

// Mock next/headers
jest.mock('next/headers', () => ({
  cookies: jest.fn(() => ({
    get: jest.fn(),
    set: jest.fn(),
  })),
}));

// Mock auth/lib.ts
jest.mock('../../auth/lib', () => ({
  ...jest.requireActual('../../auth/lib'),
  sleep: jest.fn(), // Mock sleep directly here
  defaultSession: {
    isLoggedIn: false,
    username: 'guest',
    jobTitle: 'unemployed',
  },
  sessionOptions: {
    password: 'complex_password_at_least_32_characters_long',
    cookieName: 'iron-session/examples/next.js',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    },
  },
}));

const mockSleep = sleep as jest.Mock;
const { getIronSession } = require('iron-session');
const mockGetIronSession = getIronSession as jest.Mock;
const { cookies } = require('next/headers');
const mockCookies = cookies as jest.Mock;

describe('actions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Tests for getSession
  describe('getSession', () => {
    it('should return default session if not logged in', async () => {
      mockGetIronSession.mockResolvedValueOnce({
        isLoggedIn: false,
        save: jest.fn(),
        destroy: jest.fn(),
      });

      const session = await getSession();

      expect(session.isLoggedIn).toEqual(defaultSession.isLoggedIn);
      expect(session.username).toEqual(defaultSession.username);
      expect(session.jobTitle).toEqual(defaultSession.jobTitle);
      expect(mockSleep).toHaveBeenCalledWith(250);
    });

    it('should return existing session if logged in', async () => {
      const existingSession = {
        isLoggedIn: true,
        username: 'testuser',
        jobTitle: 'developer',
        save: jest.fn(),
        destroy: jest.fn(),
      };
      mockGetIronSession.mockResolvedValueOnce(existingSession);

      const session = await getSession();

      expect(session).toEqual(existingSession);
      expect(mockSleep).toHaveBeenCalledWith(250);
    });

    it('should not sleep if shouldSleep is false', async () => {
      mockGetIronSession.mockResolvedValueOnce({
        isLoggedIn: false,
        save: jest.fn(),
        destroy: jest.fn(),
      });

      await getSession(false);

      expect(mockSleep).not.toHaveBeenCalled();
    });
  });

  // Tests for login
  describe('login', () => {
    it('should log in the user and revalidate path', async () => {
      const mockSession = {
        isLoggedIn: false,
        username: 'guest',
        jobTitle: 'unemployed',
        save: jest.fn(),
        destroy: jest.fn(),
      };
      mockGetIronSession.mockResolvedValueOnce(mockSession);

      const formData = new FormData();
      formData.append('username', 'newuser');
      formData.append('jobTitle', 'engineer');

      await login(formData);

      expect(mockSession.isLoggedIn).toBe(true);
      expect(mockSession.username).toBe('newuser');
      expect(mockSession.jobTitle).toBe('engineer');
      expect(mockSession.save).toHaveBeenCalledTimes(1);
      expect(require('next/cache').revalidatePath).toHaveBeenCalledWith('/information');
    });
  });

  // Tests for logout
  describe('logout', () => {
    it('should log out the user and revalidate path', async () => {
      const mockSession = {
        isLoggedIn: true,
        username: 'testuser',
        jobTitle: 'developer',
        save: jest.fn(),
        destroy: jest.fn(),
      };
      mockGetIronSession.mockResolvedValueOnce(mockSession);

      await logout();

      expect(mockSession.destroy).toHaveBeenCalledTimes(1);
      expect(require('next/cache').revalidatePath).toHaveBeenCalledWith('/');
    });
  });

  // Tests for updateData
  describe('updateData', () => {
    it('should update user data and revalidate path', async () => {
      const mockSession = {
        isLoggedIn: true,
        username: 'olduser',
        jobTitle: 'oldjob',
        save: jest.fn(),
        destroy: jest.fn(),
      };
      mockGetIronSession.mockResolvedValueOnce(mockSession);

      const formData = new FormData();
      formData.append('username', 'updateduser');
      formData.append('jobTitle', 'updatedjob');

      await updateData(formData);

      expect(mockSession.isLoggedIn).toBe(true);
      expect(mockSession.username).toBe('updateduser');
      expect(mockSession.jobTitle).toBe('updatedjob');
      expect(mockSession.save).toHaveBeenCalledTimes(1);
      expect(require('next/cache').revalidatePath).toHaveBeenCalledWith('/information');
    });
  });
});