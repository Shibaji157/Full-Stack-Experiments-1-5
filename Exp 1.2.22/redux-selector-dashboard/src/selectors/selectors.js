import { createSelector } from "@reduxjs/toolkit";

export const selectPosts = (state) => state.posts.posts;

export const totalPosts = createSelector(
  [selectPosts],
  (posts) => posts.length
);

export const shortPosts = createSelector(
  [selectPosts],
  (posts) =>
    posts.filter(
      (post) => post.title.length < 15
    ).length
);

export const longPosts = createSelector(
  [selectPosts],
  (posts) =>
    posts.filter(
      (post) => post.title.length >= 15
    ).length
);
