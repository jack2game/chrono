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

    let date = dayjs(refDate).locale("en", locale);
    const weekStart = locale?.weekStart ?? 0;
    const weekdayOffset = (7 + offset - weekStart) % 7;

    switch (modifier) {
        case "this":
            date = date.weekday(weekdayOffset);
            break;
        case "next":
            date = date.weekday(weekdayOffset + 7);
            break;
        case "last":
            date = date.weekday(weekdayOffset - 7);
            break;
    }

    return date;
}

export function toDayJSClosestWeekday(refDate: Date, offset: number, locale?: Partial<ILocale>): Dayjs {
    let date = dayjs(refDate).locale("en", locale);
    const refOffset = date.day();

    if (Math.abs(offset - 7 - refOffset) < Math.abs(offset - refOffset)) {
        date = date.weekday(offset - 7);
    } else if (Math.abs(offset + 7 - refOffset) < Math.abs(offset - refOffset)) {
        date = date.weekday(offset + 7);
    } else {
        date = date.weekday(offset);
    }

    return date;
}
