import dayjs, { Dayjs } from "dayjs";

export function toDayJSWeekday(
    refDate: Date,
    offset: number,
    modifier?: "this" | "next" | "last",
    locale?: Partial<ILocale>
): Dayjs {
    if (!modifier) {
        return toDayJSClosestWeekday(refDate, offset, locale);
    }

    let date = dayjs(refDate).locale("en");
    const weekStart = locale?.weekStart ?? 0;
    const daystofirstdayfothisweek = (7 - weekStart + date.day()) % 7;
    const firstdayofthisweek = date.subtract(daystofirstdayfothisweek, 'day');

    const weekdayOffset = (7 + offset - weekStart) % 7;

    switch (modifier) {
        case "this":
            date = firstdayofthisweek.add(weekdayOffset, 'day');
            break;
        case "next":
            date = firstdayofthisweek.add(weekdayOffset + 7, 'day');
            break;
        case "last":
            date = firstdayofthisweek.substract(7 - weekdayOffset, 'day');
            break;
    }

    return date;
}

export function toDayJSClosestWeekday(refDate: Date, offset: number, locale?: Partial<ILocale>): Dayjs {
    let date = dayjs(refDate).locale("en", locale);

    const refOffset = date.weekday();
    const weekStart = locale?.weekStart ?? 0;
    const weekdayOffset = (7 + offset - weekStart) % 7;

    if (Math.abs(weekdayOffset - 7 - refOffset) < Math.abs(weekdayOffset - refOffset)) {
        date = date.weekday(weekdayOffset - 7);
    } else if (Math.abs(weekdayOffset + 7 - refOffset) < Math.abs(weekdayOffset - refOffset)) {
        date = date.weekday(weekdayOffset + 7);
    } else {
        date = date.weekday(weekdayOffset);
    }
    return date;
}
