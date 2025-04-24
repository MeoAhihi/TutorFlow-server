const AccessControl = require("accesscontrol");
const ac = new AccessControl()

ac.grant('tutor').grant('student').grant('parent')