import { environment } from "src/environments/environment";

export class APIs {
  public static DOBOX_ANALYTICS =
    environment.host + "/v3/private/users/{placeholder}/tasks/dobox-analytics";
  public static TASKS_STATUS_BREAKDOWNN =
    environment.host + "/v3/private/users/{placeholder}/tasks/status/breakdown";
  public static TASKS_DEADLINE_BREAKDOWN =
    environment.host +
    "/v3/private/users/{placeholder}/tasks/deadline/breakdown";
  public static TASKS_DEADLINE_PRIORITY_BREAKDOWN =
    environment.host +
    "/v3/private/users/{placeholder}/tasks/deadline/priority/breakdown";

  public static PROJECTS_TASKS_DEADLINE_BREAKDOWN =
    environment.host +
    "/v2/private/users/{placeholder}/projects/tasks/deadline/breakdown";
  public static KANBANS_TASKS_DEADLINE_BREAKDOWN_BY_PROJECT_ID =
    environment.host +
    "/v2/private/projects/{placeholder}/kanbans/tasks/deadline/breakdown";

  public static TOP_TAGS_BREAKDOWN =
    environment.host + "/v2/private/users/{placeholder}/tasks/top-tags";
  public static TASKS_TOP_BENEFICIARIES =
    environment.host +
    "/v3/private/users/{placeholder}/tasks/top-beneficiaries";
  public static TASKS_PER_USERS =
    environment.host + "/v3/private/users/{placeholder}/tasks/users/breakdown";
  public static TASKS_USERS =
    environment.host + "/v2/private/users/{placeholder}/tasks/users";
  public static MONTH_TASK_BREAKDOWN =
    environment.host +
    "/v3/private/users/{placeholder}/projects/{placeholder2}/tasks/priority/breakdown";
  public static USER_NEW_TASKS =
    environment.host + "/v3/private/users/{placeholder}/new-tasks";

  public static USER_SERVICE =
    environment.host + "/v2/private/users/{placeholder1}";
  public static TASK_UPDATES =
    environment.host + "/v3/private/tasks/{placeholder}/updates";
  public static TASK_UPDATES_DELETE =
    environment.host +
    "/v3/private/tasks/{placeholder1}/updates/{placeholder2}";
  public static USERS_SEARCH = environment.host + "/v2/private/users/find";
  public static USER_BOARDS =
    environment.host + "/v3/private/tasks/collections";
  public static BOARDS_BY_ID =
    environment.host + "/v3/private/tasks/collections/{placeholder1}";
  public static PROJECTS_SERVICE = environment.host + "/v2/private/projects";
  public static PROJECTS_USER_BY_TASK_USER_TYPE_SERVICE =
    environment.host +
    "/v2/private/users/{placeholder1}/tasks/{placeholder2}/projects";
  public static PROJECTS_BY_ID_SERVICE =
    environment.host + "/v2/private/projects/{placeholder1}";
  public static PROJECTS_STATUS_BREAKDOWN =
    environment.host +
    "/v2/private/projects/{placeholder}/tasks/status/breakdown";
  public static PROJECTS_USERS_TASKS_STATUS_BREAKDOWN =
    environment.host +
    "/v2/private/projects/{placeholder}/users/tasks/status-breakdown";

  public static PROJECTS_PINNED_BY_ID_SERVICE =
    environment.host +
    "/v2/private/projects/{placeholder1}/pins/{placeholder2}";
  public static PROJECTS_SEARCH_SERVICE =
    environment.host + "/v2/private/projects/search";
  public static PROJECTS_KANBAN_SERVICE =
    environment.host + "/v2/private/projects/{placeholder1}/kanbans";
  public static PROJECTS_USER_SERVICE =
    environment.host + "/v2/private/projects/{placeholder1}/users";
  public static UPDATE_PROJECTS_USER_SERVICE =
    environment.host +
    "/v2/private/projects/{placeholder1}/users/type/{placeholder2}";
  public static PROJECTS_USER_BY_ID_SERVICE =
    environment.host +
    "/v2/private/projects/{placeholder1}/users/{placeholder2}";
  public static KANBAN_SERVICE =
    environment.host + "/v2/private/projects/kanbans/{placeholder1}";

  public static KANBAN_USER_PROJECT_SERVICE =
    environment.host + "/v2/private/users/{placeholder}/projects/kanbans/";

  public static TAG_SERVICE = environment.host + "/v2/private/tags";
  public static USER_TAGS_SERVICE =
    environment.host + "/v2/private/users/{placeholder1}/tasks/tags";
  public static TAG_TASK_SERVICE =
    environment.host + "/v2/private/tasks/{placeholder1}/tags";

  public static BENEFICIARY_SERVICE =
    environment.host + "/v3/private/beneficiaries";
  public static BENEFICIARY_TASK_SERVICE =
    environment.host + "/v3/private/tasks/{placeholder1}/beneficiaries";

  public static TASK_ID_SERVICE =
    environment.host + "/v3/private/tasks/{placeholder1}";

  public static TASK_SERVICE = environment.host + "/v3/private/tasks";
  public static TASK_SERVICE_EXCEL =
    environment.host + "/v3/private/tasks/export/excel";
  public static TASK_SERVICE_PDF =
    environment.host + "/v3/private/tasks/export/pdf";

  public static TASK_USERS_SERVICE =
    environment.host + "/v3/private/tasks/{placeholder1}/users";
  public static TASK_TAGS_SERVICE =
    environment.host + "/v3/private/tasks/{placeholder1}/tags";
  public static TASK_CHECKLIST_SERVICE =
    environment.host + "/v3/private/tasks/{placeholder1}/checklists";
  public static CHECKLIST_SERVICE =
    environment.host + "/v3/private/tasks/checklists/{placeholder1}";
  public static TASK_COMMENT_SERVICE =
    environment.host + "/v2/private/tasks/{placeholder1}/comments";
  public static TASK_COMMENT_BY_ID_SERVICE =
    environment.host +
    "/v2/private/tasks/{placeholder1}/comments/{placeholder2}";
  public static TASK_RISK_SERVICE =
    environment.host + "/v2/private/tasks/{placeholder1}/risks";
  public static TASK_RISK_BY_ID_SERVICE =
    environment.host + "/v2/private/tasks/{placeholder1}/risks/{placeholder2}";
  public static TASK_KANBAN_SERVICE =
    environment.host + "/v3/private/kanbans/{placeholder1}/tasks";
  public static PROJECTS_STATISTICS =
    environment.host +
    "/v3/private/projects/{placeholder1}/kanbans/tasks/breakdown";
  public static TASK_ACTIVITY_SERVICE =
    environment.host + "/v2/private/tasks/{placeholder1}/activities";
  public static ATTACHMENTS_HOST = "cdn-blink.stcs.com.sa";
  public static ATTACHMENTS_HOST_2 = "cdn.hubplatforms.com";
  public static ATTACHMENTS_TASKS_DOBOX =
    environment.host + "/v2/private/tasks";
  public static TASK_RA_SERVICE =
    environment.host + "/v3/private/tasks/{placeholder1}";
  public static DOCUMENTS_DOBOX = environment.host + "/v2/private/documents";
  public static DOMAIN_STC = "@stc.com.sa";
  public static DOMAIN_STC_VALUE = "stc.com.sa";
  public static DOMAIN_STC_C = "@stcs.com.sa";
  public static DOMAIN_STC_C_VALUE = "stcs.com.sa";
  public static DOMAIN_R = "@mail-r.com";
  public static DOMAIN_R_VALUE = "mail-r.com";
  public static LOGIN_OTP_VALIDATE =
    environment.host + "/v3/public/auth/otp/validate";
  public static TOKEN_VALIDATE_DOBOX =
    environment.host + "/v3/public/auth/validate";
  public static TOKEN_REFRESH_DOBOX =
    environment.host + "/v3/public/auth/refresh_token";
  public static FEEDS = environment.host + "/v2/private/feeds";
  public static POSTS = environment.host + "/v2/private/posts";
  public static USERS = environment.host + "/v2/private/users";
  public static LOGIN = environment.host + "/v3/public/auth/signin";
  public static LOGOUT_URL = environment.logoutURL;

  public static IMAGE_HOST = "https://igateapp.stc.com.sa";
  public static MYGATE_HOST = environment.mygateHost;
  public static IGATE_HOST = environment.igateHost;
  public static INBOX_ITEMS =
    this.MYGATE_HOST + "/header/employees/{email}/inbox";
  public static NAVIGATION_ITEMS =
    this.MYGATE_HOST + "/header/employees/{email}/nav/items";
  public static EMPLOYEE_SEARCH =
    this.MYGATE_HOST + "/header/employees/search";
}
