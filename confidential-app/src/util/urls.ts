export enum ROUTE_PATH {
    HOME = '/',
    LOGIN = '/login',
    REGISTER = '/register',
    USER_PROFILE = '/user-profile',
    USER_PROFILE_MEASUREMENTS = '/user-profile/update-measurements',
    USER_PROFILE_BASIC_INFO = '/user-profile/update-basic-info',
    USER_PROFILE_MEASUREMENTS_OVER_TIME = '/user-profile/measurements-over-time',
    USER_PROFILE_WEIGHT_OVER_TIME = '/user-profile/weight-over-time',
    EXERCISE_LIBRARY = '/exercise-library',
    EXERCISE_LIBRARY_EDIT_EXERCISE = '/exercise-library/edit/:exercise_id',
    WORKOUTS = '/workouts',
    EDIT_WORKOUT = '/workouts/edit/:id',
    NOT_FOUND = '*'
}