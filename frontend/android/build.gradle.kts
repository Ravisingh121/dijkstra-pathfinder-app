import org.gradle.api.tasks.Delete
import org.gradle.api.file.Directory

allprojects {
    repositories {
        google()
        mavenCentral()
    }
}

// Define a custom root build directory
val newBuildDir = rootProject.layout.buildDirectory.dir("../../build").get()
rootProject.layout.buildDirectory.set(newBuildDir)

// Apply custom build directory to all subprojects
subprojects {
    val newSubprojectBuildDir = newBuildDir.dir(name)
    layout.buildDirectory.set(newSubprojectBuildDir)
}

// Ensure subprojects evaluate after :app
subprojects {
    evaluationDependsOn(":app")
}

// Register clean task
tasks.register<Delete>("clean") {
    delete(rootProject.layout.buildDirectory)
}
