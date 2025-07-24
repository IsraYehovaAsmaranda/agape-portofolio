export const parseDate = (date: Date): string => {
    return date.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })
}