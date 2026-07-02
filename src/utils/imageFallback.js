import placeholder from "../assets/icons/placeholder.svg";

export const NEWS_PLACEHOLDER = placeholder;

export function handleImageError(e) {
  const img = e.currentTarget;
  if (img.dataset.fallbackApplied) return;
  img.dataset.fallbackApplied = "1";
  img.src = NEWS_PLACEHOLDER;
}
