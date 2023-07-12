export enum ROUTE_PATH {
    HOME = '/',
    LOGIN = '/login',
    REGISTER = '/register',
    USER_PROFILE = '/user-profile',
    USER_PROFILE_MEASUREMENTS = 'update-measurements',
    USER_PROFILE_BASIC_INFO = 'update-basic-info',
    USER_PROFILE_MEASUREMENTS_OVER_TIME = 'measurements-over-time',
    USER_PROFILE_WEIGHT_OVER_TIME = 'weight-over-time',
    USER_PROFILE_CHECK_ALL_MEASUREMENTS = 'check-all-measurements',
    EXERCISE_LIBRARY = '/exercise-library',
    EXERCISE_LIBRARY_EDIT_EXERCISE = 'edit/:exercise_id',
    EXERCISE_LIBRARY_CREATE_EXERCISE_TYPE = 'create',
    WORKOUTS = '/workouts',
    WORKOUTS_EDIT = 'edit/:id',
    WORKOUTS_CREATE = 'create',
    NOT_FOUND = '*',
}