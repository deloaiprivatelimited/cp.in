// src/api/portfolio.js
import { privateAxios } from './axios';

/**
 * Normalize backend response shape:
 * Expected backend: { success: boolean, message: string, data: any }
 */
const normalizeResponse = (res) => {
  if (res && res.data) {
    return {
      ok: res.data.success === true,
      message: res.data.message || '',
      data: res.data.data,
      status: res.status
    };
  }
  return { ok: false, message: 'Unexpected response', data: null, status: res?.status || 0 };
};

const extractError = (error) => {
  if (error.response) {
    // Server responded with status code outside 2xx
    const payload = error.response.data || {};
    return {
      message: payload.message || (payload.error && payload.error.message) || error.response.statusText || 'Server error',
      status: error.response.status,
      data: payload.data || null
    };
  } else if (error.request) {
    // Request made but no response (network)
    return { message: 'Network error — please check your connection', status: 0, data: null };
  } else {
    // Something else
    return { message: error.message || 'Unexpected error', status: 0, data: null };
  }
};

export const getPortfolio = async () => {
  try {
    const res = await privateAxios.get('/portfolio');
    const normalized = normalizeResponse(res);
    if (!normalized.ok) {
      const err = new Error(normalized.message || 'Failed to get portfolio');
      err.status = normalized.status;
      err.data = normalized.data;
      throw err;
    }
    return normalized.data; // payload coming from backend (portfolio data)
  } catch (error) {
    const err = extractError(error);
    const e = new Error(err.message);
    e.status = err.status;
    e.data = err.data;
    throw e;
  }
};

export const updatePortfolio = async (portfolioData) => {
  try {
    const res = await privateAxios.put('/portfolio', portfolioData);
    const normalized = normalizeResponse(res);
    if (!normalized.ok) {
      const err = new Error(normalized.message || 'Failed to update portfolio');
      err.status = normalized.status;
      err.data = normalized.data;
      throw err;
    }
    return { message: normalized.message || 'Updated', data: normalized.data || null };
  } catch (error) {
    const err = extractError(error);
    const e = new Error(err.message);
    e.status = err.status;
    e.data = err.data;
    throw e;
  }
};
