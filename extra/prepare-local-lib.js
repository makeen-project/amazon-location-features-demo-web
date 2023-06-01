const fs = require("fs");
const path = require("path");

// Check if new lib folder already exists
const newLibPath = path.join(__dirname, "../lib/lib");
if (!fs.existsSync(newLibPath)) {
	// Create new lib folder
	fs.mkdirSync(newLibPath);

	// Move files and folders from old lib folder to new one
	const oldLibPath = path.join(__dirname, "../lib");
	if (fs.existsSync(oldLibPath)) {
		fs.readdirSync(oldLibPath).forEach(file => {
			if (file !== "lib") {
				const filePath = path.join(oldLibPath, file);
				const newFilePath = path.join(newLibPath, file);
				fs.renameSync(filePath, newFilePath);
			}
		});
	}

	// Copy package.json to new lib folder
	const packageJsonPath = path.join(__dirname, "../package.json");
	const newPackageJsonPath = path.join(oldLibPath, "package.json");
	fs.copyFileSync(packageJsonPath, newPackageJsonPath);
}
