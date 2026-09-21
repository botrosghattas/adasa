export function dateFormatter(date) {
    const formatter = new Intl.DateTimeFormat('ar', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        numberingSystem: 'arab',
        timeZone: 'Africa/Cairo'          // Keeps the date consistent with your input
    });
    return formatter.format(new Date(`${date}T00:00:00Z`))
}