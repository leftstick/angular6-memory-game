
export function stop(e: Event): void {
    if (!e) {
        return;
    }
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    if (e.preventDefault) {
        e.preventDefault();
    }
}
