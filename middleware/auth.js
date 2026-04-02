function checkRole(allowedRoles) {
  return (req, res, next) => {
    const role = "admin";  // TEMP

    if (!role) {
      return res.status(400).json({ message: "Role required" });
    }

    if (!allowedRoles.includes(role)) {
      return res.status(403).json({ message: "Access denied" });
    }

    next();
  };
}

module.exports=checkRole;